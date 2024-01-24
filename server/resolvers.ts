import { Context } from "./context";

export const resolvers = {
  Query: {
    users(_parent: any, _args: any, context: Context) {
      return context.prisma.user.findMany();
    },
    user(_parent: any, args: any, context: Context) {
      return context.prisma.user.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    subjects(_parent: any, _args: any, context: Context) {
      return context.prisma.subject.findMany();
    },
    subject(_parent: any, args: any, context: Context) {
      return context.prisma.subject.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    tasks(_parent: any, _args: any, context: Context) {
      return context.prisma.task.findMany();
    },
    task(_parent: any, args: any, context: Context) {
      return context.prisma.task.findFirst({
        where: {
          id: args.id,
        },
      });
    },
  },
  User: {
    subjects(parent: any, _args: any, context: Context) {
      return context.prisma.subject.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
    tasks(parent: any, _args: any, context: Context) {
      return context.prisma.task.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
  Subject: {
    tasks(parent: any, _args: any, context: Context) {
      return context.prisma.task.findMany({
        where: {
          subjectId: parent.id,
        },
      });
    },
  },
  // Optional might not be used
  // Task: {
  //    subject(parent: any, _args: any, context: Context) {
  //     return context.prisma.subject.findFirst({
  //       where: {

  //       }
  //     })
  //    }
  // },
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
