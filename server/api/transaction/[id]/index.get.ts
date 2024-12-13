import { getTransactionById } from "~/server/db/transaction";

export default defineEventHandler((event) => {
	const id = parseInt(getRouterParam(event, "id")!);
	return getTransactionById({ id });
});
