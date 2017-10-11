/* tslint:disable */

import * as Mongoose from 'mongoose';
import { ObjectID } from 'mongodb';
import { Author } from './author.type';


export interface Post {
  id: number; 
  title: string; 
  author: Author; 
}

const PostSchema = new Mongoose.Schema({
  title: { type: String, required: true },
  author: { type: Mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
});

export interface PostDbObject extends Mongoose.Document {
  _id: ObjectID;
    title?: string;
    author?: ObjectID;
}

export const PostModel = Mongoose.model('Post', PostSchema);
