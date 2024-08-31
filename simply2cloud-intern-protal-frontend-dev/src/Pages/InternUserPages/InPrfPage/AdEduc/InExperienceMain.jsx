import React from 'react'
import InternExModl from './AdExModl/AdExModl'
import InExperienceCard from '../../../BothUserPages/InExperienceCard/InExperienceCard'
import InternExModl2 from './AdExModl/AdExModl2';
import { ToastContainer } from 'react-toastify';

const InExperienceMain = (props) => {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="col-span-1">
      {props?.internJobExperienceDetails?.length == 0 ? (
        <div className="text-blue-500 p-8 rounded-xl shadow-md text-left border-2">
          <div className="mb-6  ">
            <InternExModl fromJobPage={false} open={open} setOpen={setOpen}/>
          </div>
        </div>
      ) : (      
     <>     
     {props?.internJobExperienceDetails?.map((element, index) => {
          return <>

            <InExperienceCard internJobExperienceDetails={element} />
          </>
        })}
        <InternExModl2 fromJobPage={false} open={open} setOpen={setOpen}/>
        </>  
      )      
      }
    </div>
  )
}

export default InExperienceMain