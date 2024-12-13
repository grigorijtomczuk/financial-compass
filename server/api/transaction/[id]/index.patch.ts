import { getTransactionById, updateTransactionById } from "~/server/db/transaction";

import HttpStatusCodes from "http-status-codes";

export default defineEventHandler(async (event) => {
	const id = parseInt(getRouterParam(event, "id")!);
	const candidate = await getTransactionById({ id });
	const data = await readBody(event);

	if (!candidate) {
		setResponseStatus(event, HttpStatusCodes.NOT_FOUND);
		return {
			status: HttpStatusCodes.NOT_FOUND,
			message: "ClientErrorNotFound",
		};
	}

	return updateTransactionById({ id, data }).then(
		(data) => data,
		(error) => error
	);
});
