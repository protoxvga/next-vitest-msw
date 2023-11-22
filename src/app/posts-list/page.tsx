"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/utils/useDebounce";
import UsersTable from "./_components/table";

const UsersTablePage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") ?? "");

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearchQuery) params.set("q", debouncedSearchQuery);
    else if (!debouncedSearchQuery) params.delete("q");

    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearchQuery]);

  return (
    <div className="px-10">
      <div className="bg-white border-none rounded-t">
        <div>
          <Input
            data-testid="search-input"
            placeholder="Search by name or company"
            className="w-full max-w-lg shadow-none"
            value={searchQuery}
            onChange={(newValue) => {
              setSearchQuery(newValue.target.value);
            }}
          />
        </div>
      </div>
      <UsersTable />
    </div>
  );
};

export default UsersTablePage;
