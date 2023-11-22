"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Post } from "@/types/Post";
import { columns } from "./columns";

async function getPosts() {
  return (await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  )) as Post[];
}

const PostsList = () => {
  const { data } = useSuspenseQuery<Post[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getPosts(),
  });

  return (
    <>
      <DataTable columns={columns} data={data} className="rounded-t mt-2" />
    </>
  );
};

export default PostsList;
