import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import UsersTable from "@/app/users-table/_components/table";
import { Providers } from "@/utils/providers";
import { Suspense } from "react";

describe("User table page", () => {
  describe("Default data", () => {
    it("Is the table fullfilled", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTable />
        </Suspense>,
        { wrapper: Providers }
      );

      // Wait for the presence one element
      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-name");
        expect(isUser.length).toBeGreaterThan(0);
      });

      // Continue with original assertion
      const isUser = screen.queryAllByTestId("user-name");
      expect(isUser.length).toBe(3);
    });
  });

  describe("Sorting", () => {
    it("Name sorting order", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTable />
        </Suspense>,
        { wrapper: Providers }
      );

      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-name");
        expect(isUser.length).toBeGreaterThan(0);
      });

      fireEvent.click(screen.getByTestId("name-button"));

      // Continue with original assertion
      await waitFor(() => {
        const firstUser = screen.queryAllByTestId("user-name")[0];
        const lastUser = screen.queryAllByTestId("user-name")[2];

        expect(firstUser.textContent).toBe("Clementine Bauch");
        expect(lastUser.textContent).toBe("Pierre Perrin");
      });
    });

    it("Email sorting order", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTable />
        </Suspense>,
        { wrapper: Providers }
      );

      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-email");
        expect(isUser.length).toBeGreaterThan(0);
      });

      fireEvent.click(screen.getByTestId("email-button"));

      // Continue with original assertion
      await waitFor(() => {
        const firstUser = screen.queryAllByTestId("user-email")[0];
        const lastUser = screen.queryAllByTestId("user-email")[2];

        expect(firstUser.textContent).toBe("Aincere@april.biz");
        expect(lastUser.textContent).toBe("Shanna@melissa.tv");
      });
    });
  });
});
