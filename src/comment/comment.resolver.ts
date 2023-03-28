import {
  Args,
  Context,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthenticatedRequest } from 'src/auth/interface/authenticated-request.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { Comment } from './comment.model';
import { CreateCommentInput } from './dto/createComment.input';
import { UpdateCommentInput } from './dto/updateComment.input';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Comment])
  async comments() {
    return await this.prismaService.comment.findMany();
  }

  @Mutation(() => Comment)
  async createComment(
    @Args('input') input: CreateCommentInput,
    @Args('postId', { type: () => Int }) postId: number,
    @Context('req') request: AuthenticatedRequest,
  ) {
    return await this.prismaService.comment.create({
      data: {
        postId,
        userId: request.user.id,
        createdAt: new Date(),
        ...input,
      },
    });
  }

  @Mutation(() => Comment)
  async updateComment(
    @Args('input') input: UpdateCommentInput,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return await this.prismaService.comment.update({
      where: {
        id,
      },
      data: {
        ...input,
      },
    });
  }

  @ResolveField()
  async author(@Parent() comment: Comment) {
    const { userId } = comment;
    return await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  @ResolveField()
  async post(@Parent() comment: Comment) {
    const { postId } = comment;
    return await this.prismaService.post.findUnique({
      where: {
        id: postId,
      },
    });
  }
}
