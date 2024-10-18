import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const entries = await prisma.entry.findMany();
  const entryList = entries.map((e) => (<li key={e.id}><a href={`/entry/${e.id}`}>{e.title}</a></li>));
  return (
    <div>
      {entryList}
    </div>
  );
}
