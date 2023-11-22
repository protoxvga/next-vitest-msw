"use client";

import { Button } from "@/components/ui/button/button";
import { Post } from "@/types/Post";
import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Post>[] = [
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
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          className="text-center"
          variant="ghost"
          data-testid="name-button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="mr-2">Title</span>
          <ArrowsUpDownIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span data-testid="user-name">{row.original.title}</span>
    ),
  },
  {
    accessorKey: "body",
    header: ({ column }) => {
      return (
        <Button
          className="text-center"
          variant="ghost"
          data-testid="email-button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="mr-2">Body</span>
          <ArrowsUpDownIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span data-testid="user-email">{row.original.body}</span>
    ),
  },
  {
    accessorKey: "userId",
    header: ({ column }) => {
      return (
        <Button
          className="text-center"
          variant="ghost"
          data-testid="email-button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="mr-2">User ID</span>
          <ArrowsUpDownIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span data-testid="user-email">{row.original.userId}</span>
    ),
  },
];
