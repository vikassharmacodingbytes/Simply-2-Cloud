import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from "date-fns";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext } from '../../../../context';
import ConfirmDelete from '../../../../Component/ConfirmDelete/ConfirmDelete';
import API_BASE_URL from '../../../../config';
import JobCard from "../../../BothUserPages/JobCard/JobCards";
import CommonJobCard from '../../../BothUserPages/CommonJbCard/CommonJobCard';

export default function CompanyJobViewCard({ jobs }) {
  const [showConfirmDelete, setShowConfirmDelete] = React.useState();
  const [deleteButton, setDeleteButton] = React.useState(false);
  const token = Cookies.get('token');
  const {
    getJobsPostedByCompanyFunc
  } = React.useContext(DataContext);


  const deleteJobFunc = (id) => {
    setDeleteButton(true);
    let data = {}

    if (!isNaN(Cookies.get("profile_id"))) {
      data = {
        profile_id: Cookies.get("profile_id")
      }
    }

    axios.delete(`${API_BASE_URL}/job-post/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data
    }).then(() => {
      toast.success("Skill Removed Sucessfully", {
        position: "top-center"
      })
      setShowConfirmDelete(false)
      getJobsPostedByCompanyFunc();
    }).catch((err) => {
      toast.error("Internal Server Error", {
        position: "top-center"
      })
      console.log(err)
    }).finally(() => {
      setDeleteButton(false);
    })
  }

  const sendDeleteFunc = () => {
    deleteJobFunc(jobs.id);
  }


  return (
    <>
    <div className='border-2 rounded-xl p-4 md:mx-4' style={{
   display : "flex",  flexDirection: 'column', justifyContent: 'space-between', height: '100%'
    }}>
    <CommonJobCard jobs={jobs} />
    <div className="text-center mx-auto w-[100%] ">
            <button
              onClick={() => {
                setShowConfirmDelete(true)
              }}
              className="border mx-auto font-semibold border-red-500 text-red-500 px-2 py-1 space-x-2 rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring focus:border-red-300">
              <span>Delete</span>
              <DeleteIcon className="" />
            </button>
          </div>
    </div>
      {/* <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {jobs.company.company_name.substring(0, 1)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography variant="div" fontWeight="bold" className='text-lg'>
            {jobs.job_title}
          </Typography>}
          subheader={`Posted On ${format(new Date(jobs.updated_at), "dd MMM yy h a")}`}
        />
        <CardContent>
          <table>
            {Object.entries(fieldsArray).map(([key, value]) => {
              return (
                <tr key={key} variant='tr'>
                  <td key={key} variant='th' fontSize={"1rem"} className='font-bold' >
                    {key}&nbsp;&nbsp;
                  </td>
                  <td variant='td' fontSize={"1rem"} fontWeight="400">
                    {value}
                  </td><br />
                </tr>
              )
            }
            )}
          </table>
        </CardContent>
        <CardActions disableSpacing>
         
        </CardActions>
      </Card> */}
      
      {
        showConfirmDelete ?
          <ConfirmDelete setShowConfirmDelete={setShowConfirmDelete} sendDeleteFunc={sendDeleteFunc} deleteButton={deleteButton}/> : null
      }
    </>
  );
}
