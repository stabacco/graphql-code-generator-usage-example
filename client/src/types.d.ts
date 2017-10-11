/* tslint:disable */

export interface Query {
  posts?: Post[]; 
}

export interface Post {
  id: number; 
  title: string; 
  author: Author; 
}

export interface Author {
  id: number; 
  firstName: string; 
  lastName: string; 
  posts?: Post[]; 
}
export interface PostsAuthorArgs {
  findTitle?: string; 
}
export namespace AllPosts {
  export type Variables = {
  }

  export type Query = {
    posts?: Posts[]; 
  } 

  export type Posts = {
    id: number; 
    title: string; 
    author: Author; 
  } 

  export type Author = {
    lastName: string; 
    firstName: string; 
    id: number; 
  } 
}
