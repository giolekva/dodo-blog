import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function createEntry(data: FormData) {
    'use server'
    const user = headers().get("x-forwarded-user")!;
    const prisma = new PrismaClient();
    await prisma.entry.create({
        data: {
            title: data.get("title")!.toString(),
            contents: data.get("contents")!.toString(),
            author: user,
        }
    });
    redirect("/");
}

export default function Page() {
    return (
        <form action={createEntry} method="POST">
            <label>
                Title
                <input type="text" name="title"></input>
            </label>
            <label>
                Contents
                <textarea name="contents"></textarea>
            </label>
            <button type="submit" name="create">Create</button>
        </form>
    );
}