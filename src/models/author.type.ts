/* tslint:disable */

import * as Mongoose from 'mongoose';
import { ObjectID } from 'mongodb';
import { Post } from './post.type';


export interface Author {
  id: number; 
  firstName: string; 
  lastName: string; 
  posts: Post[] | null; 
}

export interface PostsAuthorArgs {
  findTitle: string | null; 
}

const AuthorSchema = new Mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export interface AuthorDbObject extends Mongoose.Document {
  _id: ObjectID;
    firstName?: string;
    lastName?: string;
}

export const AuthorModel = Mongoose.model('Author', AuthorSchema);
