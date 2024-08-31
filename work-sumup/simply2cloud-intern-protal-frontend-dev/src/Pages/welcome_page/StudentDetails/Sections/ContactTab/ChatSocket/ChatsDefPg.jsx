import React from 'react'
import chat from "./chat.png";
import NoDataPage from '../../../../../../Component/NoDataPage/NoDataPage';

const ChatsDefPg = () => {
    return (
        <div className='col-span-4 flex justify-center items-center h-[95%]  border-2 border-sold border-gray rounded-xl my-4 ml-4 '>
            <div>
                <div className=''>
                    <img src={chat} alt="" className='w-[300px] h-[300px]' />
                </div>
                <NoDataPage domain={"Pick up where you left off"} subdomain={"Select a conversation and chat away."} height={"2rem"} />
            </div>
        </div>
    )
}

export default ChatsDefPg
