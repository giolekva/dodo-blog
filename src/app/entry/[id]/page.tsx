import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

type Params = {
    params: {
        id: string;
    };
};

export default async function Page({ params } : Params) {
    'use server'
    const prisma = new PrismaClient();
    const entry = await prisma.entry.findUnique({
        where: {
            id: Number(params.id),
        }
    });
    if (entry === null) {
        redirect("/");
    }
    return (
        <div>
            <h1>{entry.title}</h1>
            <div>
                {entry.contents}
            </div>
        </div>
    );
}