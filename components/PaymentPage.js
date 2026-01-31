"use client"
import React from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useraction'
import { useState } from 'react'
import { useSession } from 'next-auth/react'


const PaymentPage = ({ username }) => {

    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    // const [currentUser, setcurrentUser] = useState({})
    // const [payments, setPayments] = useState([])
    // const searchParams = useSearchParams()
    // const router = useRouter()


    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        // Get the order Id 
        // let a = await initiate(amount, username, paymentform)
        // let orderId = a.id
        // var options = {
        //     "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
        //     "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        //     "currency": "INR",
        //     "name": "Get Me A Chai", //your business name
        //     "description": "Test Transaction",
        //     "image": "https://example.com/your_logo",
        //     "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        //     "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        //         "name": "Gaurav Kumar", //your customer's name
        //         "email": "gaurav.kumar@example.com",
        //         "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        //     },
        //     "notes": {
        //         "address": "Razorpay Corporate Office"
        //     },
        //     "theme": {
        //         "color": "#3399cc"
        //     }
        // }

        // var rzp1 = new Razorpay(options);
        // rzp1.open();
        alert("Payments coming soon 🚧")
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover'>
                <img className='object-cover w-full' src="cover.png" alt="" />
                <div className=' bottom-80 absolute right-[46%] border-2 border-black rounded-full'>
                    <img className='rounded-full' width={123} height={123} src="profile.png" alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-19 flex-col gap-3">
                <div className='font-bold text-xl'>
                    @{username}
                </div>
                <div className='text-gray-500'>
                    Podiatry and Foot Health Educational Resources
                </div>
                <div className='text-gray-500'>
                    1,261 members. 140 Posts. $2,752/month
                </div>

                <div className="payment flex gap-3 w-[80%] mt-10">
                    <div className="supporter w-1/2 bg-slate-100 rounded-lg p-10">
                        {/* show list of all the supporter as a leader board */}
                        <h2 className='text-2xl font-bold my-5'>Supporter</h2>
                        <ul className='mx-5'>
                            <li className='my-2 flex items-center gap-2'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>Arun give <span className='font-bold'>$1000</span> to mrBeast with a message "love you bro 😍"</span>
                            </li>
                            <li className='my-2 flex items-center gap-2'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>Arun give <span className='font-bold'>$1000</span> to mrBeast with a message "love you bro 😍"</span>
                            </li>
                            <li className='my-2 flex items-center gap-2'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>Arun give <span className='font-bold'>$1000</span> to mrBeast with a message "love you bro 😍"</span>
                            </li>
                            <li className='my-2 flex items-center gap-2'>
                                <img width={30} src="avatar.gif" alt="" />
                                <span>Arun give <span className='font-bold'>$1000</span> to mrBeast with a message "love you bro 😍"</span>
                            </li>
                        </ul>
                    </div>
                    <div className="makepayment w-1/2 bg-slate-100 rounded-lg p-10">
                        <h2 className='font-bold text-2xl my-5'>Make a Payment</h2>
                        <div className='flex gap-3 flex-col'>
                            <input onChange={handlechange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-200' placeholder='Enter Name' />
                            <input onChange={handlechange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-200' placeholder='Enter Message' />
                            <div className='felx space-x-5'>
                                <input onChange={handlechange} value={paymentform.amount} name='amount' type="text" className='w-[65%] p-3 rounded-lg bg-slate-200' placeholder='Enter Amount' />
                                <button className='cursor-pointer bg-linear-to-br from-purple-200 to-blue-300 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-3.5 w-[30%] text-center leading-5'>Pay</button>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <button className='bg-slate-200 rounded-lg p-3 cursor-pointer' onClick={() => pay(1000)}>Pay $10</button>
                            <button className='bg-slate-200 rounded-lg p-3 cursor-pointer' onClick={() => pay(2000)}>Pay $20</button>
                            <button className='bg-slate-200 rounded-lg p-3 cursor-pointer' onClick={() => pay(3000)}>Pay $30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
