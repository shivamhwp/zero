import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users } from "../server/db/schema";

const connectionString = process.env.DATABASE_URL!;

export default async function HomePage() {
  const client = postgres(connectionString);
  const db = drizzle(client);
  const allUsers = await db.select().from(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {allUsers.map((user) => (
        <div key={user.id}>{user.fullName}</div>
      ))}
    </main>
  );
}
