import { afterAll, afterEach, beforeAll, vi } from "vitest";

import { server } from "@/tests/mocks/handlers";

// Log when api call get intercepted
// server.events.on("request:start", ({ request }) => {
//   console.log("MSW intercepted:", request.method, request.url);
// });

beforeAll(() => {
  server.listen();

  vi.mock("next/navigation", () => {
    const actual = vi.importActual("next/navigation");
    return {
      ...actual,
      useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
      })),
      useSearchParams: vi.fn(() => ({
        get: vi.fn(),
      })),
      usePathname: vi.fn(),
    };
  });
});

afterAll(() => server.close());
afterEach(() => server.resetHandlers());
