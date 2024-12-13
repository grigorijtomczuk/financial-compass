import { type TransactionData, createTransaction } from "~/server/db/transaction";

export default defineEventHandler(async (event) => {
	const data: TransactionData = await readBody(event);
	return await createTransaction(data);
});
