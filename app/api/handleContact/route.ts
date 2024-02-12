import { Contact } from "@/modals/Contact"
import mongoose from "mongoose"

export async function POST(req : Request) {
    const body = await req.json()
    console.log("api")
    mongoose.connect(`${process.env.MONGO_URL}`)
    await Contact.create(body)
    return new Response(JSON.stringify(body))
}