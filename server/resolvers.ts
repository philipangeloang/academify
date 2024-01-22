import { Context } from "./context";

export const resolvers = {
  Query: {
    users(_parent: any, _args: any, context: Context) {
      return context.prisma.user.findMany();
    },
  },
  Mutation: {
    addUser: (_parent: any, args: any, context: Context) => {
      return context.prisma.user.create({
        data: {
          ...args.user,
        },
      });
    },
  },
};
