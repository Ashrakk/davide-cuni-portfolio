import type { BlogPost } from "./blog";

export interface Pagination {
	page: number;
	posts: BlogPost[];
}
