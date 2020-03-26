import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('blog')
export class BlogController {

    constructor(private blogService: BlogService) {}

    @Post('/post')
    async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO ){
        const newPost = await this.blogService.addPost(createPostDTO)
        return res.status(HttpStatus.OK).json({
            message: 'POST has been submitted successfully'.
            post: newPost,
        })
    }

}
