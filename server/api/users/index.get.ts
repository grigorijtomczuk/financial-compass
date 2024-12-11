import { getUsers } from "@/server/db/users";

export default defineEventHandler(async (event) => {
  return await getUsers();
});
