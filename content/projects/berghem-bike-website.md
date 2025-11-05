---
title: Berghem Bike
description: "A bike sharing prototype project that marked my entry into full stack web development, powered by core web languages."
date: 21st June 2020
publishedAt: 2020-06-21
updatedAt: 2026-04-23
image: /images/berghembike_home.png
ogImage: /images/berghembike_home.png
compactImage: /images/berghembike_home.png
imageAlign: top
alt: Berghem Bike Home
author: Davide Cuni
topic: Prototype
readTime: 7 min read
---

## Overview

**Berghem Bike** was a bike sharing prototype developed during my high school studies in response to a local initiative on urban mobility in Bergamo.

Although the assignment was entirely optional, I chose to take it on as an opportunity to learn core web technologies.

This project became my first serious step into full stack web development. Without relying on modern frameworks, I built everything from scratch, learning as I went. My goal was to understand what was actually happening under the hood before delegating complexity to abstractions.

## Objectives

At the start of the project, I set three goals for myself:

- Build a working frontend and backend that could communicate reliably
- Create a reusable UI system using TypeScript and CSS
- Design a user management system and API layer in PHP with database access through PDO

That scope made the project more ambitious than the original assignment, but also much more interesting. It stopped being just a prototype and became a sandbox for figuring out how web applications actually fit together.

## Research and Architecture

Before writing a single line of code, I mapped out the application architecture and backend flow. I spent time reading articles, studying similar open source projects, and sketching a system that could handle requests centrally and delegate them to the appropriate classes.

::DcpImg{src="/images/blog/berghembike_uml.png" alt="UML Design (Simplified)"}
::

The resulting structure routed all client requests through a central `action.php` layer, which then coordinated user state, validation, and database operations. Looking back, it was an early sign that I was less interested in decorating pages and more interested in building systems, even when those systems were probably more elaborate than strictly necessary.

## Development

### User Management System

The most substantial part of the project was the user management system. I built a small backend architecture focused on request handling, session validation, and database operations. The flow was coordinated through `action.php`, with the `User` and `DbManager` classes handling user state and database access.

All client requests were funneled through a single entry point, `action.php`. When a user attempted to log in, the action layer would instantiate a `User` object and hand off the credentials:

```php
# action.php
$user = new User();
$result = $user->login($emailusername, $password);
```

From there, the User class would run its own validation before touching the database at all. I didn't want raw user input going anywhere near a query.

### Security: Finding My Own Solutions

Security was a concern I took seriously even at that stage, probably more than most students would for an optional project. I hadn't taken any formal course on web security, so I relied on documentation, Stack Overflow, and the OWASP authentication guidelines to piece together something reasonable.

#### Backend Validation with Regex

To guard against malicious input, I used regular expressions to screen what users could send to the server. If a string contained unexpected characters, the request was rejected before reaching the database:

```php
# constants.php
const REGEX_PASS = '/^[a-zA-Z0-9!@#$%^&*_.~-]+$/';

# user.php
$result = preg_match(REGEX_PASS, $tmp_passwd);

if(!$result)
    return INVALID_PASSWORD;
```

Today I would lean more heavily on a validation library like `symfony/validator` instead of crafting my own validation system, but at the time it made more sense to learn the underlying mechanisms behind validation.

#### Manual Session Timeout

PHP can expire sessions through server-side configuration and garbage collection, but I wanted the application itself to enforce a shorter inactivity window.

I added a manual 10-minute timeout check, so the next request after that period would log the user out, clear session state, and start a fresh session. It was a simple layer, but it reduced the inactivity window and made the logout behavior explicit inside the application code.

```php
/*------- SESSION TIMEOUT CHECK -------*/
$session_time = $_SERVER['REQUEST_TIME'];
$timeout_time = 600; //10 minute session timeout

if (isset($_SESSION['LAST_ACTIVITY']) &&
    ($session_time - $_SESSION['LAST_ACTIVITY']) > $timeout_time)
{
    if($user != null)
    {
        $user->logout();
        $user = null;
        session_unset();
        session_destroy();
        session_start();
    }
}
//time resets on every action
$_SESSION['LAST_ACTIVITY'] = $session_time;
```

#### Defensive Rate Limiting

I also added a small defensive limit around the authentication endpoint. The goal was to reduce repeated login attempts and avoid letting the same session hammer validation and password checks over and over.

The limiter was simple: after too many failed attempts, the login flow returned a temporary error instead of continuing immediately. It was not a complete anti-abuse system, but it was a meaningful first step toward hardening the login flow.

```php
/*------- ReDoS PROTECTION -------*/
$time_wait = 0;

if(isset($_SESSION['attempts']))
{
    $attempts = $_SESSION['attempts'];
    if($attempts > MAX_ATTEMPTS)
    $time_wait = 60;
}

if (isset($_SESSION['LAST_ACTIVITY']) &&
    ($_SERVER['REQUEST_TIME'] - $_SESSION['LAST_ACTIVITY']) < $time_wait)
{
    echo TOO_MANY_REQUESTS;
    exit();
}

$_SESSION['LAST_ACTIVITY'] = $_SERVER['REQUEST_TIME'];
```

It was not sophisticated. There was no IP-level blocking, CAPTCHA, or permanent lockout. But it taught me why authentication endpoints need defensive limits, even in small projects.

### Frontend: The "Accidental Framework"

In crafting the layout, I established a system of "utility classes" for columns, spacers, and rows. Unknowingly, I was building a rudimentary version of what we now know as **Utility-First CSS** (like Tailwind), before I even knew such frameworks existed.

#### Programmatic Responsiveness

The core of the layout was managed by a TypeScript class I called `ResponsiveManager`. At the time, rather than relying solely on CSS media queries, which could feel inconsistent across the fragmented mobile browsers of 2019, I looked to WPBakery for inspiration. I loved how it modularly stacked columns into rows on mobile.

I implemented this system in TypeScript: I determined the type of device via User-Agent and viewport width, then, if a mobile device was detected (or the screen dropped below 800px), the code would physically swap the DOM classes.

```ts
// responsive.ts
for (let index = 0; index < this.allColumnsElements?.length; index++) {

    this.allColumnsElements
        .item(index)
        .classList.remove(
        'div_internal_column',
        'column_width_1e6',
        'column_width_1e5',
        'column_width_1e4',
        'column_width_1e3'
    );

    this.allColumnsElements.item(index).classList.add('paddingBottom20');
}
//ADD flexColumns TO Rows
for (let index = 0; index < this.allRowElements?.length; index++) {
    this.allRowElements.item(index).classList.add('flexColumn');
}
//REMOVE boxshadow FROM shadowElements
for (let index = 0; index < this.shadowElements?.length; index++) {
    this.shadowElements.item(index).classList.remove('boxshadow');
}
//ADD modal_content_mobile TO modals
for (let index = 0; index < this.modals?.length; index++) {
    this.modals.item(index).classList.add('modal_content_mobile');
}
```

While today I would handle this entirely within CSS, this programmatic approach served as a massive deep dive into DOM manipulation and state management. It wasn't just about making the site look good; it was about forcing the browser to follow my specific logic, ensuring a consistent experience regardless of how the CSS was being interpreted.

### Connecting Frontend and Backend

To keep communication clean between the two sides, I defined a shared set of constants: error codes that both PHP and TypeScript understood, and route identifiers the frontend used to make requests.

```ts
public static readonly SUCCESS             =  '1';
public static readonly GENERAL_ERROR       = ' 0';
public static readonly INVALID_USERNAME    = '-1';

/*USER*/
public static readonly REQUEST_MAP_MARKERS      = 'get_map_data=';
public static readonly REQUEST_LOGIN_STATUS     = 'check_user=true';
public static readonly CHECK_PRIVILEGE_STATUS   = 'check_user_privilege=true';

/*DASHBOARD */
public static readonly REQUEST_OVERVIEW         = 'dashboard=true&overview=true';

// etc..
```

All requests went through the `AjaxManager` class, which centralised the XMLHttpRequest logic and accepted a callback to handle the response.

```ts
/**
* For all other requests
* @param callback function to be called after server response
*/
public ajax_custom_request(param: string, callback: Function)
{
    let xmlRequest = new XMLHttpRequest();
    let url = 'user_management/action.php';
    xmlRequest.addEventListener('load', () => { callback(xmlRequest); } );
    xmlRequest.open('POST', url, true);
    xmlRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlRequest.send(param);
}
```

The dashboard's activity page used a two step pattern: one request for the HTML page structure, a second for the actual data returned as XML, which the frontend then parsed to build the table. It was a manual version of what modern data-fetching libraries handle automatically; understanding it at that level made those abstractions a lot less mysterious later.

```ts
public submit_logout()
{
    this.ajaxman?.ajax_submit_logout(
    (xmlRequest: XMLHttpRequest) => 
    {
        this.responsive?.switchMenuType(false);
        sessionStorage.clear();

        if(this.pageID?.value == 'dashboard')
            window.location.replace("index.php");
    });
}
```

## Conclusion

Berghem Bike was my first real attempt at building a complete web application rather than a static website. It pushed me to think across the entire stack at once: architecture, validation, session management, API conventions, and the messy contract between frontend and backend.

None of the solutions here are state of the art. Some of them I would do entirely differently today. But what I'm still glad about is that I reasoned my way to them: reading documentation, studying how attacks work, understanding why a timeout matters or why regex is expensive. I didn't just follow a tutorial and move on. I hit a problem, looked into it properly, and built something that addressed it even if imperfectly.

That habit of not skipping the "why" even when the "what" would have been enough is probably the most durable thing this project gave me.

Ultimately, the code reflects the stage I was at. Still, I have a lot of affection for this project because many of the aspects of web development I still care about today, such as maintainability, reusable systems, and pragmatic security, started to take shape here.

### Key Features

- Session handling and timeout
- Login and sign-up flow
- Password hashing
- User and admin dashboard
- Bike stations map and bike slots availability

### Tech Stack

- PHP
- TypeScript
- CSS

## Links

::DcpButton{url="https://github.com/Ashrakk/Berghem_Bike" icon="i-mdi-github" variant="outline"}
View the Source Code
::
