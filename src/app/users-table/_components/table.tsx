"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { User } from "@/types/User";
import { useSuspenseQuery } from "@tanstack/react-query";

import { columns } from "./columns";

async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )) as User[];
}

const UsersTable = () => {
  const { data } = useSuspenseQuery<User[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getUsers(),
  });

  return (
    <>
      <DataTable columns={columns} data={data} className="rounded-t mt-2" />
    </>
  );
};

export default UsersTable;
