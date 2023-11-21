import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

const allUsers = [
  {
    id: 1,
    name: "Pierre Perrin",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
  },
];

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(allUsers);
  }),
];

export const server = setupServer(...handlers);
