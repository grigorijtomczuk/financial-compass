import { deleteUserById, getUserById } from "@/server/db/users";

import { StatusCode } from "status-code-enum";

export default defineEventHandler(async (event) => {
	const id = parseInt(getRouterParam(event, "id")!);
	const candidate = await getUserById({ id });

	if (!candidate) {
		setResponseStatus(event, StatusCode.ClientErrorNotFound);
		return {
			status: StatusCode.ClientErrorNotFound,
			message: "ClientErrorNotFound",
		};
	}

	return deleteUserById({ id }).then(
		(data) => data,
		(error) => error
	);
});
