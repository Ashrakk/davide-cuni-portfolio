export interface BlogPost {
	path: string;
	// SEO Stuff
	title: string;
	date: string;
	description: string;
	image: string;
	ogImage: string;
	alt: string;
	author: string;
	// Display stuff
	topic: string; // Motivational - News - Troubleshooting.. etc
	readTime: string; // Motivational - News - Troubleshooting.. etc
}
