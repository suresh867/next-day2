
import { Contact } from "@/modals/Contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req: Request, content:any){
    const dataId = content.params.dataid;
    const filter = {_id: dataId}
    const body = await req.json();
    await mongoose.connect(`${process.env.MONGO_URL}`);
    const result = await Contact.findOneAndUpdate(filter, body)
    console.log(body);
    return NextResponse.json({result, success:true});
}

export async function GET(req: Request, content:any){
    const dataId = content.params.dataid;
    const record = {_id: dataId}
    await mongoose.connect(`${process.env.MONGO_URL}`);
    const result = await Contact.findById(record)
    return NextResponse.json({result, success:true});
}


export async function DELETE(req: Request, content:any){
    const dataId = content.params.dataid;
    const record = {_id: dataId}
    await mongoose.connect(`${process.env.MONGO_URL}`)
    const result = await Contact.findOneAndDelete(record);
    return NextResponse.json({result, success:true})
}