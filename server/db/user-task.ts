import { Prisma, prisma } from "@/server/utils/prisma";

export type UserTask = Prisma.UserTaskGetPayload<{}>;
export type UserTaskId = Prisma.UserTaskGetPayload<{ select: { id: true } }>;
export type UserTaskData = Prisma.UserTaskGetPayload<{ select: { text: true; creatorId: true } }>;

export const getUserTasks = async () => await prisma.userTask.findMany();
export const getUserTaskById = async ({ id }: UserTaskId) => await prisma.userTask.findUnique({ where: { id } });

export const createUserTask = async (data: UserTaskData) => await prisma.userTask.create({ data });

export const updateUserTaskById = async ({ id, data }: UserTaskId & { data: UserTaskData }) =>
	await prisma.userTask.update({
		where: { id },
		data: { text: data.text },
	});

export const deleteUserTaskById = async ({ id }: UserTaskId) => await prisma.userTask.delete({ where: { id } });
