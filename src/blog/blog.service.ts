import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

//service will hold all the logic for this application and 
// then communicate with the MongoDB database by adding and retrieving data from it.


// going to add method for creating post revretiving all creating post and
// fetching the dtails of a single post from the databse
@Injectable()
export class BlogService {
    constructor(@injectModel('Post') private readonly postModel: Model<Post>) {}

    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const newPost = await this.postModel(createPostDTO);
        return newPost.save()
    }
    async getPost(postId : string): Promise<Post> {
        const post = await this.postModel.findById(postId).exec();
        return post 
    }

    async getPosts(postId: string): promise<Post> {
        const post = await this.postModel.find().exec()
        return post
    }
}
