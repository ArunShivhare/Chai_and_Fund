"use server"
import Razorpay from "razorpay"
import Payment from "@/models/payment"
import connectDB from "@/db/connectDB"
import User from "@/models/user"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    // instance.orders.create({
    //     amount: 50000,
    //     currency: "INR",
    //     receipt: "receipt#1",
    //     notes: {
    //         key1: "value3",
    //         key2: "value2"
    //     }
    // })

    let options = {
        amount: Number.parseInt(amount),
        corruncy: "INR",
    }

    let x = await instance.orders.create(options)

    //creare a payment object which show the pending payment in the database
    await Payment.create({oid: x.id, name: paymentform.name, to_user: to_username, message: paymentform.message, amount: amount})

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({username: username})

    if(!u){
        return null;
    }

    let user = u.toObject({flattenObjectIds: true})
    return user;
}

export const fetchpayments = async (username) => {
    await connectDB()
    //find all payments soerted by amount in descending order
    let payments = await Payment.find({to_user: username}).sort({amount: -1}).lean()
    // let payments = await Payment.find({to_user: username}).sort({ createdAt: -1 })
    return payments;
}