---
title: Berghem Bike
date: 21st June 2020
description: A Bike Sharing prototype project that marked my entry into full stack web development, powered by core web languages. Discover my journey of learning through practice!
image: /images/berghembike_home.png
ogImage: /images/berghembike_home.png
compactImage: /images/berghembike_home.png
imageAlign: top
alt: Berghem Bike Home
author: Davide Cuni
topic: Prototype
readTime: 7 min read
updatedAt: 2025-07-06
---

## Introduction

Berghem Bike was a project that encouraged my creativity by discovering the
world of web development during my high school studies.

The project centered around Bike Sharing in the city of Bergamo, at the time the city council was asking students to provide prototypes of a website to support a bike sharing initiative in the city.

Personally, I've worked on this project to learn more about traditional web development relying exclusively on core web languages without resorting to supporting frameworks. Without any underlying infrastructure I had to build everything by myself, learning while doing.

### Objectives

Before delving into the research and design, I established key objectives that I wanted to achieve with this project.

- Working with multiple programming languages and making them talk to each other
- Creating a reusable frontend framework to manage the UI and interact with the backend using Typescript and CSS
- Developing a reusable user management system and REST API on PHP using PDO to handle the database

## Research and Design

At the start of this project I laid out a plan and an architectural framework to guide the development process. minimizing the need for codebase revisions. I gained valuable insights by reading articles and studying the code of similar open source projects, particularly regarding the user management system part, which was uncharted territory for me at the time.

::CImg{src="/images/blog/berghembike_uml.png" alt="UML Design (Simplified)"}
::

As depicted in the UML, all requests are routed to actions.php, which then delegates tasks to other backend components as necessary.

## Development

### User Management System

The User Management System includes all classes, methods and variables related to user interactions with the backend.

At its core, this system comprises three key classes

- Action
  Manages requests from the frontend by assigning tasks to other backend components, handling user session instantiation and caching.
- User
  Manages user session data and methods, performs security checks on incoming data, and interacts with the DbManager for database operations.
- DbManager
  Handles all the database operations using PDO

One of the most crucial features of a user management system is **security**. To achieve this, i've implemented various techniques to prevent different kinds of attacks and to protect the users from getting their data stolen.

In more detail, one such feature i've implemented in the *session timeout*, which closes the session when a signed-in user does not interact with the website for a fixed amount of time, ensuring session security.

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

Additional security measures come into play when users send payloads of information to the server. The backend must ensure that users access only authorized information by sanitizing client requests to prevent malicious activity, including SQL injection.

To sanitize the requests, I used **regex** (*Regular Expressions*) to detect any forbidden symbols that could be exploited by hackers.

```php
/*------- REGEX CHECK -------*/
const REGEX_PASS = '/^[a-zA-Z0-9!@#$%^&*_.~-]+$/';

$result = preg_match(REGEX_PASS, $tmp_passwd);
if(!$result)
    return INVALID_PASSWORD;
```

Another security layer I later integrated limits the number of requests made to the server during the login process. This helps prevent both brute-force attempts and ReDoS Attacks, as excessive login requests can overload the server due to the CPU-intensive nature of regex operations.

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

### Frontend

In crafting the page layout, I established some "standard classes" in CSS, such as columns, spacers, and more, unknowingly creating a super basic framework similar to Tailwind CSS before I discovered it.

The TypeScript code managed responsiveness, modals, and Ajax requests. Given my limited knowledge of CSS media queries at the time, I dynamically swapped row and column classes in TypeScript based on user agents and page width. While this approach may not seem optimal, it served as a valuable exercise in mastering TypeScript!

### Connecting the two together

To facilitate seamless communication, I established standards for both the frontend and backend. Using constants, they shared common error codes understood by both systems.

```ts
public static readonly SUCCESS             =  '1';
public static readonly GENERAL_ERROR       = ' 0';
public static readonly INVALID_USERNAME    = '-1';
...
```

On the frontend, these constants also defined the routes for various queries, which were then used to make requests.

```ts
/*USER*/
public static readonly REQUEST_MAP_MARKERS      = 'get_map_data=';
public static readonly REQUEST_LOGIN_STATUS     = 'check_user=true';
public static readonly CHECK_PRIVILEGE_STATUS   = 'check_user_privilege=true';
/*DASHBOARD */
public static readonly REQUEST_OVERVIEW         = 'dashboard=true&overview=true';
...
...
```

Being more familiar with callbacks, I chose to handle the ajax requests using this method, here's a snippet of code from *userhandler.ts* that utilizes the AjaxManager class to request the logout, using a callback function to handle the response.

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

This experience marked my entrance into full stack web development. Examining the code now, i can't avoid but noticing how my techniques have changed over time. While I recognize the choices I would make differently with my current knowledge. I also acknowledge the solutions i found at the time, which proved to work.

> I see Berghem Bike as a positive accomplishment, representing my first full-stack website prototype and reflecting my journey of growth and learning.

### Features

- Session Handling
- Login and Sign Up System
- Encrypted Passwords
- User and Admin dashboard
- Bike Stations Map & Bike Slots Availability

### Tech Stack

- PHP
- Typescript
- CSS

## Live Site

Check out the live site, it's open source!

::CButton{url="https://berghem-bike.typotek.space/" icon="i-mdi-web"}
Check out the Live Site
::
::CButton{url="https://github.com/Ashrakk/Berghem_Bike" icon="i-mdi-github" variant="outline"}
Check out the Source Code
::
