import { Entry, PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

type Params = {
    params: {
        id: string;
    };
};

function author(entry: Entry): ReactElement | null {
    if (entry.author === null) {
        return null;
    }
    return (<h6>Author: {entry.author}</h6>);
}

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
            {author(entry)}
            <div>
                {entry.contents}
            </div>
        </div>
    );
}