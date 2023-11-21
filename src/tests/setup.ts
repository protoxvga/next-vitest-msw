import { afterAll, afterEach, beforeAll } from "vitest";

import { server } from "@/mocks/handlers";

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
