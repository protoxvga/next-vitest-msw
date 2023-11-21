import Counter from "./_components/counter";
import ListUsers from "./_components/list-users";

export default function Page() {
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <Counter />
      <ListUsers />
    </main>
  );
}
