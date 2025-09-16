export interface BlogPost {
	path: string;
	// SEO Stuff
	title: string;
	date: string;
	description: string;
	author: string;
	// Images
	image: string;
	compactImage: string | undefined;
	ogImage: string;
	imageAlign: string;
	alt: string;
	// Display stuff
	topic: string; // Motivational - News - Troubleshooting.. etc
	readTime: string; // Motivational - News - Troubleshooting.. etc
}
