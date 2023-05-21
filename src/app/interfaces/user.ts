import { Post } from "./post";

export interface User {
    name: string;
    location: string;
    profileImg: string;
    posts: Post[];
}
