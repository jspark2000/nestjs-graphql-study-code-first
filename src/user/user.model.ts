import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { Comment } from 'src/comment/comment.model';
import { Post } from 'src/post/post.model';

registerEnumType(Role, { name: 'Role' });

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  nickname: string;

  @Field(() => Role)
  role: Role;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => [Post], { nullable: 'itemsAndList' })
  posts: Post[];

  @Field(() => [Comment], { nullable: 'itemsAndList' })
  comments: Comment[];
}
