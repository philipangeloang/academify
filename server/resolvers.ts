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
    addUser(_parent: any, args: any, context: Context){
      return context.prisma.user.create({
        data: {
          name: args.user.name,
          email: args.user.email
        },
        // ...args.user - instead of name and email is also possible using spread operator much faster
      });
    },
    deleteUser(_parent: any, args: any, context: Context){
      return context.prisma.user.delete({
        where: {
          id: args.id
        }
      })
    },
    addSubject(_parent: any, args: any, context: Context){
      return context.prisma.subject.create({
        data: {
          ...args.subject
        }
      })
    },
    deleteSubject(_parent: any, args: any, context: Context){
      return context.prisma.subject.delete({
        where: {
          id: args.id
        }
      })
    },
    addTask(_parent: any, args: any, context: Context){
      return context.prisma.subject.create({
        data: {
          ...args.task
        }
      })
    },
    deleteTask(_parent: any, args: any, context: Context){
      return context.prisma.subject.delete({
        where: {
          id: args.id
        }
      })
    },
  },
};
