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
import CommonJobCard from '../../../BothUserPages/CommonJbCard/CommonJobCard';
import LoadingPage from '../../../../Component/LoadingPage/LodingPage';


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


export default function InternApplicationCard({ jobApplication }) {

  const [expanded, setExpanded] = React.useState(false);


console.log(jobApplication);

  // const fieldsArray = {
  //   'User Phone': jobApplication.user.phone,
  //   'Email': jobApplication.user.email,
  //   'Status' : 
  // };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(!jobApplication){
    return <LoadingPage />
  }

  return (
   <>
   <div className='border rounded-xl p-4 mx-4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
  <div>
    <CommonJobCard jobs={jobApplication.job}/>
  </div>
  <div className='mt-4'>
    <button className={`py-2 px-4 text-white font-semibold ${jobApplication.status == "Rejected" ? "bg-red-700" : jobApplication.status == "Accepted" ? "bg-green-600" : "bg-yellow-500" }`}>
      {jobApplication.status}
    </button>
  </div>
</div>


 
   </>
  );
}

