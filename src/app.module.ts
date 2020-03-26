import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

// Here, you imported the MongooseModule into the root AppModule and then used the forRoot() method to supply the connection to the database
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-blog-project', { useNewUrlParser: true }), BlogModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
