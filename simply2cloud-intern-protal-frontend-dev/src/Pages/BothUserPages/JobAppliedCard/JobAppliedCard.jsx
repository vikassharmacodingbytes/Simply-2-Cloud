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
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Button, CircularProgress } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from "date-fns";
import Heading from '../../../RepeatedCode/tags/Heading';
import { DataContext } from '../../../context';
import { Check } from '@mui/icons-material';
import { Close } from "@mui/icons-material";
import axios from 'axios';
import API_BASE_URL from '../../../config';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function InternJobAppliedCard({ jobApplication }) {
  const { getJobApplicationFunc } = React.useContext(DataContext);

  const [expanded, setExpanded] = React.useState(false);
  const [approveBtn, setApproveBtn] = React.useState(false);
  const [deleteBtn, setDeleteBtn] = React.useState(false);
  const token = Cookies.get('token');



console.log(jobApplication)

  const fieldsArray = {
    'User Phone': jobApplication.user.name,
    'Email': jobApplication.user.email,
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const approveFunc = (id)=>{
    setApproveBtn(true);
    axios.put(`${API_BASE_URL}/intern-job-apply/${id}/`,
    {status : "Accepted"}, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    }).then(()=>{
      getJobApplicationFunc()
      toast.success("Aproved Successfully!",{position: "top-center"});
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setApproveBtn(false);
    })
  }

  const rejectFunc = (id)=>{
    setDeleteBtn(true);
    axios.put(`${API_BASE_URL}/intern-job-apply/${id}/`,
    {status : "Rejected"}, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    }).then(()=>{
      getJobApplicationFunc();
      toast.success("Application Rejected!",{position: "top-center"});
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setDeleteBtn(false);
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }} className='border-2 rounded-2xl'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* {jobs.company.company_name.substring(0, 1)} */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="div" fontWeight="bold" className='text-lg'>
          {jobApplication?.user?.name}
        </Typography>}
        subheader={`Applied For - ${jobApplication.job.job_categoery.job_category}`}
      />
      <CardContent>

        <h1 className='font-bold'>Job Subtitle - <span className='font-normal'> {jobApplication.job.job_title}</span> </h1>
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
        <Button variant='outlined' color='info' onClick={()=>{
          approveFunc(jobApplication.id)
        }}>
       {approveBtn ? <CircularProgress size={19} color='inherit'/> :<> Approve  <Check /></>}
        </Button> &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='outlined' color='error'onClick={()=>{
          rejectFunc(jobApplication.id)
        }}>
          {deleteBtn ? <CircularProgress size={19} color='error'/> :<> Reject  <Close /></>}
      
        </Button>
       
      </CardActions>
    </Card>
  );
}

