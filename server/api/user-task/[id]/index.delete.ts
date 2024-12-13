import { deleteUserTaskById, getUserTaskById } from "~/server/db/user-task";

import HttpStatusCodes from "http-status-codes";

export default defineEventHandler(async (event) => {
	const id = parseInt(getRouterParam(event, "id")!);
	const candidate = await getUserTaskById({ id });

	if (!candidate) {
		setResponseStatus(event, HttpStatusCodes.NOT_FOUND);
		return {
			status: HttpStatusCodes.NOT_FOUND,
			message: "ClientErrorNotFound",
		};
	}

	return deleteUserTaskById({ id }).then(
		(data) => data,
		(error) => error
	);
});
