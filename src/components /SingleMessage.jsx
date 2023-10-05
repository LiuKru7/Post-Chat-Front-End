import React from 'react';
import {useSelector} from "react-redux";

const SingleMessage = ({x}) => {
    const userInfo = useSelector(state=> state.info.userInfo)

    return (
        <div className="w-100">
            {userInfo.username === x.msgFrom ?

                <div className="bg-body-secondary border border-black m-2 p-2">
                    <div className="px-5 "><b>{x.msgFrom}</b></div>
                    <div><span> {x.message}</span></div>
                </div>

                :
                <div className="bg-info-subtle border border-black m-2 p-2" >
                    <div><b>{x.msgFrom}</b></div>
                    <div><span> {x.message}</span></div>
                </div>


            }


        </div>
    );
};

export default SingleMessage;