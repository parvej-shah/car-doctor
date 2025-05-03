import dbConnect, { dbCollections } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export const POST = async (request)=>{
    const newuser = await request.json();
    console.log(newuser);
    try{
        const userCollection = await dbConnect(dbCollections.usersCollection);
        const exist = await userCollection.findOne({ email: newuser.email });
        if(exist) {
            console.log("User Exists");
            
            return NextResponse.json({ message: "User Exists" }, { status: 304 });
        }
        const hashedPassword = bcrypt.hashSync(newuser.password, 14);
        const result = await userCollection.insertOne({...newuser, password: hashedPassword});
        if(result.acknowledged) {
            console.log("User Created Successfully");
            return NextResponse.json({ message: "User Created" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "User Creation Failed" }, { status: 400 });
        }
    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json(
            { message: "Something Went Wrong", error },
            { status: 500 }
        );
    }
}
