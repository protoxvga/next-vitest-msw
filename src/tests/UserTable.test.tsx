import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest"; // Assuming this is the testing library you're using

import UsersTablePage from "@/app/users-table/page";
import { User } from "@/types/User";
import { Providers } from "@/utils/providers";
import { Suspense } from "react";
import { allUsers } from "./mocks/data/users";

describe("User table page", () => {
  describe("Default data", () => {
    it("Is the table fulfilled", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTablePage />
        </Suspense>,
        { wrapper: Providers }
      );

      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-name");
        expect(isUser.length).toBeGreaterThan(0);
      });

      const isUser = screen.queryAllByTestId("user-name");
      expect(isUser.length).toBe(allUsers.length);
    });
  });

  describe("Sorting", () => {
    it("Name sorting order", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTablePage />
        </Suspense>,
        { wrapper: Providers }
      );

      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-name");
        expect(isUser.length).toBeGreaterThan(0);
      });

      fireEvent.click(screen.getByTestId("name-button"));

      await waitFor(() => {
        const sortedUsers = [...allUsers].sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        sortedUsers.forEach((user, index) => {
          const userElement = screen.queryAllByTestId("user-name")[index];
          expect(userElement.textContent).toBe(user.name);
        });
      });
    });

    it("Email sorting order", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTablePage />
        </Suspense>,
        { wrapper: Providers }
      );

      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-email");
        expect(isUser.length).toBeGreaterThan(0);
      });

      fireEvent.click(screen.getByTestId("email-button"));

      await waitFor(() => {
        const sortedUsers = [...allUsers].sort((a, b) =>
          a.email.localeCompare(b.email)
        );

        sortedUsers.forEach((user, index) => {
          const userElement = screen.queryAllByTestId("user-email")[index];
          expect(userElement.textContent).toBe(user.email);
        });
      });
    });
  });

  describe("Search filtering", () => {
    it("No result in the table", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTablePage />
        </Suspense>,
        { wrapper: Providers }
      );

      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-name");
        expect(isUser.length).toBeGreaterThan(0);
      });

      fireEvent.change(screen.getByTestId("search-input"), {
        target: { value: "No entry" },
      });

      await waitFor(() => {
        const result = screen.findByText("No results.");
        expect(result).toBeTruthy();
      });
    });

    it("Filter by name", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTablePage />
        </Suspense>,
        { wrapper: Providers }
      );

      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-name");
        expect(isUser.length).toBeGreaterThan(0);
      });

      fireEvent.change(screen.getByTestId("search-input"), {
        target: { value: "Pierre" },
      });

      await waitFor(() => {
        const filteredUsers = allUsers.filter((user: User) =>
          user.name.toLowerCase().includes("pierre")
        );

        filteredUsers.forEach((user: User, index: number) => {
          const userElement = screen.queryAllByTestId("user-name")[index];
          expect(userElement.textContent).toBe(user.name);
        });
      });
    });

    it("Filter by email", async () => {
      render(
        <Suspense fallback={<p>Loading...</p>}>
          <UsersTablePage />
        </Suspense>,
        { wrapper: Providers }
      );

      await waitFor(() => {
        const isUser = screen.queryAllByTestId("user-email");
        expect(isUser.length).toBeGreaterThan(0);
      });

      fireEvent.change(screen.getByTestId("search-input"), {
        target: { value: "april.biz" },
      });

      await waitFor(() => {
        const filteredUsers = allUsers.filter((user) =>
          user.email.toLowerCase().includes("april.biz")
        );

        filteredUsers.forEach((user, index) => {
          const userElement = screen.queryAllByTestId("user-email")[index];
          expect(userElement.textContent).toBe(user.email);
        });
      });
    });
  });
});
