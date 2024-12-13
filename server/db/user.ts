import { Prisma, prisma } from "@/server/utils/prisma";

export type User = Prisma.UserGetPayload<{}>;
export type UserId = Prisma.UserGetPayload<{ select: { id: true } }>;
export type UserLogin = Prisma.UserGetPayload<{ select: { login: true } }>;
export type UserData = Prisma.UserGetPayload<{ select: { login: true; passwordHash: true } }>;

export const getUsers = async () => await prisma.user.findMany();
export const getUserById = async ({ id }: UserId) => await prisma.user.findUnique({ where: { id } });
export const getUserByLogin = async ({ login }: UserLogin) => await prisma.user.findUnique({ where: { login } });

export const getUserTransactions = async ({ id }: UserId) =>
	await prisma.user.findMany({ where: { id }, include: { transactions: true } });
export const getUserUserTasks = async ({ id }: UserId) =>
	await prisma.user.findUnique({ where: { id }, include: { tasks: true } });

export const createUser = async (data: UserData) => await prisma.user.create({ data });

export const updateUserById = async ({ id, data }: UserId & { data: UserData }) =>
	await prisma.user.update({
		where: { id },
		data: { login: data.login, passwordHash: data.passwordHash },
	});

export const deleteUserById = async ({ id }: UserId) => await prisma.user.delete({ where: { id } });
export const deleteUserByLogin = async ({ login }: UserLogin) => await prisma.user.delete({ where: { login } });
