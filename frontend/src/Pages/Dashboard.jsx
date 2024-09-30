

import { useEffect, useState } from "react"
import { Appbar } from "../Component/Appbar"
import { Balance } from "../Component/Balance"
import { Users } from "../Component/Users"
import axios from "axios"


export const Dashboard=()=>{
    const [balance,setBalance]=useState(null);
    const getBalance =async function (){
        const token =localStorage.getItem("token");
        const res=await axios.get("http://localhost:3000/api/account/balance",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setBalance(res.data.balance)
    }
    useEffect(()=>{
        getBalance()
    },[])
    return(
        <>
            <Appbar/>
            <div className="m-8">
                <Balance value={balance !== null ? balance : "Loading..."} />
                <Users/>
            </div>
        </>
    )
}