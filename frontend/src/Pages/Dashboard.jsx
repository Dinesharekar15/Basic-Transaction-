

import { Appbar } from "../Component/Appbar"
import { Balance } from "../Component/Balance"
import { Users } from "../Component/Users"


export const Dashboard=()=>{
    return(
        <>
            <Appbar/>
            <div className="m-8">
                <Balance value={"10,000"}/>
                <Users/>
            </div>
        </>
    )
}