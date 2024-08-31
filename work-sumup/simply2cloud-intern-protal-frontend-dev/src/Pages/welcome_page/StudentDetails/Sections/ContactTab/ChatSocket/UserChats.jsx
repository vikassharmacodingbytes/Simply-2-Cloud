import { Pause, PauseCircle, PlayCircle, Send } from '@mui/icons-material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import API_BASE_URL from '../../../../../../config'
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";
import { DataContext } from '../../../../../../context';
import LoadingPage from '../../../../../../Component/LoadingPage/LodingPage';
import NoDataPage from '../../../../../../Component/NoDataPage/NoDataPage';

const UserChats = () => {

    const { id } = useParams();
    const [sendMessage, setSendMessage] = useState();
    const [button, setButton] = useState(false);

    const { getMessageOfUserFunc,
        userChats, chatSocket, socketFunction, chatTracerId } = useContext(DataContext);

    useEffect(() => {
        getMessageOfUserFunc(id);
        socketFunction();
    }, [id]);

    useEffect(()=>{
        chatSocket?.on('newMessage', (data) => {
            console.log(data?.senderId == id && data?.receiverId == Cookies.get("user"))
            if(data?.senderId == id && data?.receiverId == Cookies.get("user") ){
                  getMessageOfUserFunc(id, false);
              }
            });
            return () => {
                chatSocket?.off('newMessage');
              };
    }, [chatTracerId])



    const sendMessageFunc = () => {
        setButton(true);
      const token = Cookies.get("token");
    const messageData =  {
            sender: parseInt(Cookies.get("user")),
            receiver: id,
            text: sendMessage,
            last_message: sendMessage,
            token : token 
        }
        axios.post(`${API_BASE_URL}/chat/`,messageData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((value) => {
            setSendMessage("");
            getMessageOfUserFunc(id, false);
            chatSocket?.emit('sendMessage', { message: sendMessage, receiverId : id , senderId : Cookies.get("user")});

            
        }).catch((err) => {
            console.log(err);
        }).finally(()=>{
            setButton(false);
        })
    }

    if (!userChats) {
        return <LoadingPage />
    }

    return (
        <>
            <div className='border border-solid rounded-xl w-full my-4 '>
                <div className='border-b-2 border-gray-300 border-solid  my-3 mx-4'>
                    <div className='mb-1 md:flex'>
                        <div className='flex items-center '>
                        <img src={`${API_BASE_URL}${userChats.user_image}`} className='object-cover mx-4 h-[4rem] w-[4rem] rounded-full inline-block' alt="" />
                        <div className='md:flex items-center justify-center'>
                            <div className='font-bold underline text-gray-800 text-lg'>
                                {
                                    userChats.profile?.name
                                }
                            </div>
                                </div>
                                </div>

                                <div className='flex justify-center items-center'>
                            <div className='text-gray-700 font-semibold mx-3'>
                                {
                                    userChats.profile?.email
                                }
                            </div>
                            {
                                userChats.profile?.user_location
                            }
                        </div>
                    </div>
                </div>

                <div className='mt-8 ml-4 md:h-[46vh] h-[45vh] overflow-y-scroll'>
                    {
                        userChats?.length == 0 ? <>
                        <NoDataPage />
                        </> : 
                        userChats?.chats?.map((element) => {
                            return (
                                <div>
                                    <div className='flex '>
                                        <div className=''>
                                            <img src={`${API_BASE_URL}${element.image}`} alt="" className='h-[2rem] w-[2rem] rounded-full' />
                                        </div>
                                        <div className='flex space-x-2 text-xs font-semibold text-gray-700 justify-center items-center '>
                                            <span className='font-bold mx-2'>{element.name}</span>
                                            <span>
                                                {element.date}
                                            </span>
                                            <span>{element.time}</span>
                                        </div>
                                    </div>
                                    <div className='mx-[2.7rem] font-semibold text-gray-500 text-sm my-3'>
                                        {element.text}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mx-10 relative mb-10'>
                    <input
                        value={sendMessage}
                        type="text" placeholder='Send message' className='w-full border  outline-gray-300 rounded-xl pt-4 pb-3 pl-2 pr-10 text-gray-700 font-bold '
                        onChange={(e) => {
                            setSendMessage(e.target.value);
                        }}
                    />
                    <button className='absolute right-0 top-[0.15rem] cursor-pointer  p-3 rounded-xl'
                    disabled={button}
                    onClick={() => {
                        sendMessageFunc();
                    }}>
                       {
                        button ? <PauseCircle /> :  <Send />
                       }
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserChats
