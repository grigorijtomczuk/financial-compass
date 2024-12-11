import { getUserById, updateUserById } from "~/server/db/users";

import { StatusCode } from "status-code-enum";

export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, "id")!);
  const candidate = await getUserById({ id });
  const data = await readBody(event);

  if (!candidate) {
    setResponseStatus(event, StatusCode.ClientErrorNotFound);
    return {
      status: StatusCode.ClientErrorNotFound,
      message: "ClientErrorNotFound",
    };
  }

  return updateUserById({ id, data }).then(
    (data) => data,
    (error) => error
  );
});
