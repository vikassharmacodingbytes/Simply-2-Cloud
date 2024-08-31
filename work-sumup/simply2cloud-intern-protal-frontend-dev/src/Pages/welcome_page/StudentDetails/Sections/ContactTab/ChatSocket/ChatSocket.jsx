import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useNavigate, useParams } from 'react-router-dom';
import ChatsDefPg from './ChatsDefPg';
import UserChats from './UserChats';
import { DataContext } from '../../../../../../context';
import API_BASE_URL from '../../../../../../config';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import NoDataPage from '../../../../../../Component/NoDataPage/NoDataPage';
import LoadingPage from '../../../../../../Component/LoadingPage/LodingPage';

function App() {
    const [newMessage, setNewMessage] = useState();

    const { getUserConversationFunc,
        userConversation, chatSocket, socketFunction ,chatTracerId} = useContext(DataContext);
    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(()=>{
        getUserConversationFunc();
        if (!chatSocket){
            socketFunction();
        }
    },[])


    //     socket.on("message", (data) => {
    //         setNewMessage(data)
    //     });
    // socket.emit('sendMessage', { message: 'Hello, world!' });

    //     socket.on('disconnect', () => {
    //         console.log('Disconnected from server');
    //     });

    //     // Cleanup on unmount
    //     return () => {
    //         socket.disconnect();
    //     };
    // }, []); // Empty dependency array ensures the effect runs only once

    useEffect(()=>{
        chatSocket?.on('newMessage', (data) => {
            console.log({"reciver Id": data?.receiverId,
                "Sender ID" : Cookies.get("user")})
            if(data?.receiverId == Cookies.get("user")){
                getUserConversationFunc();
              }
            });
            return () => {
                chatSocket?.off('newMessage');
              };
    }, [chatTracerId])

    return (
        <div className="App grid md:grid-cols-6 md:h-[87vh] ">
            <header className={`App-header font-semibold col-span-2  border-2 border-sold border-gray rounded-xl my-4 ml-4 ${id ? "md:block hidden " : ""}` }>
               {
               !userConversation ? <LoadingPage /> : 
               userConversation?.length == 0 ? null :  <h1 className='text-xl font-bold mx-10 text-gray-700 underline mt-4'>Messages</h1>}
                <div className='md:h-[90%] h-[70vh] overflow-y-scroll'>
                {userConversation?.length == 0 ? <NoDataPage domain={"Inbox Empty"} subdomain={"No Conversation yet"} height={"h-[70vh]"}/> :    userConversation?.map((element, index) => {
                    return (
                        <div className={` grid grid-cols-10 mx-6 my-6 space-x-4 cursor-pointer py-3 px-6 rounded-xl ${element.chat_user_id == id ? " bg-gray-100  " : "border"}`} onClick={()=>{
                            navigate(`/chat/${element.chat_user_id}`);
                        }}>
                            <div className='col-span-2'>
                                <img src={`${API_BASE_URL}${element.image}`} alt="" className={"rounded-full w-[3rem] h-[3rem]"} />
                            </div>
                            <div className='col-span-8'>
                                <div className='flex '>
                                    <h1 className='font-bold'>{element.name}</h1>
                                    <h2 className=' ml-auto text-gray-600'>{element.time}</h2>
                                </div>
                                <div className={`flex font-semibold text-base ${ element.show_message_count && element.unread_message_count != 0 ? `text-green-500` : "text-gray-700"}`}>
                                    {element?.last_message?.substring(0, 20)} {element?.last_message?.length > 20? "..." : ""}
                                    <div className='ml-auto'>
                                        {
                                            element.show_message_count && element.unread_message_count != 0 ? <span className='bg-green-600 text-white p-1 rounded-full px-2 text-xs'>{ element.unread_message_count}
                                        </span> : <MarkEmailReadIcon />
                                        } 
                                        </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </header>
           
           <div className={`md:col-span-4 mx-4 ${!id ? 'hidden md:block' : ""}`}>
            {
                id ? <UserChats /> : <ChatsDefPg /> 
            }
            </div>
        </div>
    );
}

export default App;
