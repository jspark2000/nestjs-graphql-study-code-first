import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthenticatedRequest } from 'src/auth/interface/authenticated-request.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post } from './post.model';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly prismaService: PrismaService) {}

  // @Query()
  // async post(@Args('id') id: number): Promise<Post> {
  //   return await this.prismaService.post.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // @Query()
  // async posts(): Promise<Post[]> {
  //   return await this.prismaService.post.findMany();
  // }

  // @Mutation()
  // async createPost(
  //   @Args('input') input: CreatePostInput,
  //   @Context('req') request: AuthenticatedRequest,
  // ) {
  //   return await this.prismaService.post.create({
  //     data: {
  //       userId: request.user.id,
  //       createdAt: new Date(),
  //       ...input,
  //     },
  //   });
  // }

  // @Mutation()
  // async updatePost(@Args('input') input: UpdatePostInput) {
  //   return await this.prismaService.post.update({
  //     where: {
  //       id: input.id,
  //     },
  //     data: {
  //       title: input.title,
  //       content: input.content,
  //     },
  //   });
  // }

  // @Mutation()
  // async deletePost(@Args('id') id: number): Promise<Post> {
  //   return await this.prismaService.post.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // @ResolveField()
  // async author(@Parent() post: Post): Promise<User> {
  //   const { userId } = post;
  //   return await this.prismaService.user.findUnique({
  //     where: {
  //       id: userId,
  //     },
  //   });
  // }

  // @ResolveField()
  // async comments(@Parent() post: Post): Promise<Comment[]> {
  //   const { id } = post;
  //   return await this.prismaService.comment.findMany({
  //     where: {
  //       postId: id,
  //     },
  //   });
  // }
}
