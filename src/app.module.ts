import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
const uri = "mongodb+srv://fernando:secretsecretsecret@cluster0-ewc3a.mongodb.net/test?retryWrites=true&w=majority";
const uii2 = 'mongodb://127.0.0.1:27017/myapp'
// Here, you imported the MongooseModule into the root AppModule and then used the forRoot() method to supply the connection to the database
@Module({
  imports: [MongooseModule.forRoot(uii2, { useNewUrlParser: true }), BlogModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
