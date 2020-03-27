import { Document } from 'mongoose';
// need to extend document this will add the requried functions 
export interface Post extends Document {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly author: string;
  readonly date_posted: string;
}