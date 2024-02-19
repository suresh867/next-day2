import { Contact } from "@/modals/Contact"
import mongoose from "mongoose"

export async function POST(req : Request) {
    const body = await req.json()
    mongoose.connect(`${process.env.MONGO_URL}`)
    await Contact.create(body)
    return new Response(JSON.stringify(body))
}


export async function GET(){
    mongoose.connect(`${process.env.MONGO_URL}`)
    const foundData = await Contact.find()

    if(foundData){
        return new Response(JSON.stringify(foundData))
    } else{
        return new Response(JSON.stringify("no data in the server"))
    }
}


export async function PUT(req: Request){
    const data = await req.json();
    await mongoose.connect(`${process.env.MONGO_URL}`)
    // console.log("id got: ", data.id)
    // console.log("id got: ", data.newData)
    const update = await Contact.findByIdAndUpdate(data.id, data.newData,{new : true})
    return new Response(JSON.stringify(data))
}

export async function DELETE(req: Request){
    const dataId = await req.json()
    await mongoose.connect(`${process.env.MONGO_URL}`)
    const result = await Contact.findOneAndDelete(dataId);
    return new Response(JSON.stringify("deleted"))
}