"use client";

import { Button } from "@/components/ui/button/button";
import { User } from "@/types/User";
import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          className="text-center"
          data-testid="id-button"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="mr-2">ID</span>
          <ArrowsUpDownIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <span data-testid="user-id">{row.original.id}</span>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="text-center"
          variant="ghost"
          data-testid="name-button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="mr-2">Name</span>
          <ArrowsUpDownIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <span data-testid="user-name">{row.original.name}</span>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          className="text-center"
          variant="ghost"
          data-testid="email-button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="mr-2">Email</span>
          <ArrowsUpDownIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span data-testid="user-email">{row.original.email}</span>
    ),
  },
];
