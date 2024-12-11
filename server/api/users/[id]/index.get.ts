import { getUserById } from "@/server/db/users";

export default defineEventHandler((event) => {
  const id = parseInt(getRouterParam(event, "id")!);
  return getUserById({ id });
});
