export default defineEventHandler((event) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`${event.method} ${getRequestURL(event).pathname}`);
  }
});
