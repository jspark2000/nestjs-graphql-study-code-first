import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/comment.model';
import { User } from 'src/user/user.model';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => User)
  author: User;

  @Field()
  createdAt: Date;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => [Comment], { nullable: true })
  comments: Comment[];
}
