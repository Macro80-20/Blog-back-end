import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('blog') // prefix 'bloh
export class BlogController {
// I imported all the necessary modules to handle HTTP requests 
/// I have access to all the funcions decleared within the BlogService because i injected it
// in to the controller via construtor this patttern is regarded as  dependecny injection . 
    constructor(private blogService: BlogService) {}

// submit a post 
// nest js takes in the prefix  '/post and usesas outing mechancims 
    @Post('/post')
    async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO ){
        const newPost = await this.blogService.addPost(createPostDTO)
        return res.status(HttpStatus.OK).json({
            message: 'POST has been submitted successfully'.
            post: newPost,
        })
    }
    // fetch a particular post using ID
    @Get('post/:postID')                      // this method implments the Pipetransofrm inteface from nest.js
    // its purpoe is to valudate and ensure that the postId PARAMER CAN BE FOUND IN THE DATABASE
    async getPost(@Res() res, @Params('postID', new ValidateObjectId()) postd ){
            if (!post) {
        throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json(post);
    } 
    @Get('posts')
    async getPosts(@Res() res) {
    const posts = await this.blogService.getPosts();
    return res.status(HttpStatus.OK).json(posts);
    }

      @Put('/edit')
  async editPost(
    @Res() res,
    @Query('postID', new ValidateObjectId()) postID,
    @Body() createPostDTO: CreatePostDTO,
  ) {
    const editedPost = await this.blogService.editPost(postID, createPostDTO);
    if (!editedPost) {
        throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      post: editedPost,
    });
  }
  // Delete a post using ID
  @Delete('/delete')
  async deletePost(@Res() res, @Query('postID', new ValidateObjectId()) postID) {
    const deletedPost = await this.blogService.deletePost(postID);
    if (!deletedPost) {
        throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted!',
      post: deletedPost,
    });
  }
}
