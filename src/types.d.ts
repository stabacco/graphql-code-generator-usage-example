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
