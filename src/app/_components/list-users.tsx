"use client";

import { User } from "@/types/User";
import { useSuspenseQuery } from "@tanstack/react-query";

async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )) as User[];
}

export default function ListUsers() {
  const { data } = useSuspenseQuery<User[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getUsers(),
  });

  return (
    <>
      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ width: 180, height: 180 }}
              />
              <h3 data-testid="user-name">{user.name}</h3>
            </div>
          ))}
        </div>
      }
    </>
  );
}
