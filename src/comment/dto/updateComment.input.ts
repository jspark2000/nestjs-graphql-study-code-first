import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCommentInput {
  @Field()
  content: string;
}
