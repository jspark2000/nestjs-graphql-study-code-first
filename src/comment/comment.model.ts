import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/post.model';
import { User } from 'src/user/user.model';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;

  @Field(() => Post)
  post: Post;

  @Field(() => Int)
  postId: number;

  @Field(() => User)
  author: User;

  @Field(() => Int)
  userId: number;

  @Field()
  createdAt: Date;

  @Field()
  content: string;
}
