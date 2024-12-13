import { getTransactions } from "~/server/db/transaction";

export default defineEventHandler(async (event) => {
	return await getTransactions();
});
