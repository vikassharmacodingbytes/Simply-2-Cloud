import Modal from "react-modal";
import React from 'react'
import { Close } from "@mui/icons-material";
import JobPostForm from "../JobsPostForm/JobPostForm";




const JobPostModal = (props) => {
    return (
        <>
            <Modal
                isOpen={
                    props?.isModalOpen
                }
                onRequestClose={() =>
                    props.setIsModalOpen(false)
                }
                style={{ border: "2px solid blue", borderRadius: "1rem" }}
            >
                <div style={{
                    position: 'fixed',
                    top: '2.5rem',
                    right: '2.5rem',
                    cursor: 'pointer',
                    
                }} onClick={()=>{
                    props.setIsModalOpen(false);
                }}
                className="hover:bg-red-500 hover:text-white text-red p-4  right-0 top-0">
                    <Close />
                </div>
                <JobPostForm setIsModalOpen={props.setIsModalOpen}/>
            </Modal>

        </>
    )
}

export default JobPostModal
