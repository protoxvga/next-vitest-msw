import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { allUsers } from "./data/users";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(allUsers);
  }),
];

export const server = setupServer(...handlers);
