import { deleteUserById, getUserById } from "~/server/db/user";

import HttpStatusCodes from "http-status-codes";

export default defineEventHandler(async (event) => {
	const id = parseInt(getRouterParam(event, "id")!);
	const candidate = await getUserById({ id });

	if (!candidate) {
		setResponseStatus(event, HttpStatusCodes.NOT_FOUND);
		return {
			status: HttpStatusCodes.NOT_FOUND,
			message: "ClientErrorNotFound",
		};
	}

	return deleteUserById({ id }).then(
		(data) => data,
		(error) => error
	);
});
