import { Prisma, prisma } from "@/server/utils/prisma";

export type Transaction = Prisma.TransactionGetPayload<{}>;
export type TransactionId = Prisma.TransactionGetPayload<{ select: { id: true } }>;
export type TransactionData = Prisma.TransactionGetPayload<{
	select: { amount: true; date: true; type: true; category: true; description: true; creatorId: true };
}>;

export const getTransactions = async () => await prisma.transaction.findMany();
export const getTransactionById = async ({ id }: TransactionId) =>
	await prisma.transaction.findUnique({ where: { id } });

export const createTransaction = async (data: TransactionData) => await prisma.transaction.create({ data });

export const updateTransactionById = async ({ id, data }: TransactionId & { data: TransactionData }) =>
	await prisma.transaction.update({
		where: { id },
		data: {
			amount: data.amount,
			date: data.date,
			type: data.type,
			category: data.category,
			description: data.description,
		},
	});

export const deleteTransactionById = async ({ id }: TransactionId) =>
	await prisma.transaction.delete({ where: { id } });
