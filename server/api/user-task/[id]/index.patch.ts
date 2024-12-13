import { getUserTaskById, updateUserTaskById } from "~/server/db/user-task";

import HttpStatusCodes from "http-status-codes";

export default defineEventHandler(async (event) => {
	const id = parseInt(getRouterParam(event, "id")!);
	const candidate = await getUserTaskById({ id });
	const data = await readBody(event);

	if (!candidate) {
		setResponseStatus(event, HttpStatusCodes.NOT_FOUND);
		return {
			status: HttpStatusCodes.NOT_FOUND,
			message: "ClientErrorNotFound",
		};
	}

	return updateUserTaskById({ id, data }).then(
		(data) => data,
		(error) => error
	);
});
