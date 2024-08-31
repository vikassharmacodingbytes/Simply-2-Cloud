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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from "date-fns";
import Heading from '../../../RepeatedCode/tags/Heading';
import { NavLink, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../../config';
import Cookies from 'js-cookie';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LanguageIcon from '@mui/icons-material/Language';

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

export default function InternProfileCard({ profile, isCompany }) {
  
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="rounded-lg overflow-hidden mx-auto">
      <div className='hover:underline cursor-pointer' onClick={() => {
        navigate(`/intern-details/${profile.id}`)
      }}>
        <div className='h-[8rem]'>
          <img src={`${API_BASE_URL}/${profile.thumbnail_image}/`} className='h-[100%] w-full' alt="" />
        </div>
        {/* User Details */}
        <div className='flex mt-4'>
          <img src={`${API_BASE_URL}/${profile.user_image}/`} alt="" className=' h-[2rem] w-[2rem] rounded-full' />
          <h1 className='text-gray-700 font-bold text-base ml-4 mr-auto mt-1'>{profile?.intern?.name.length > 10 ? profile?.intern?.name.substring(0, 10) + "..." : profile?.intern?.name}</h1>
          <h1 className='text-gray-700 font-semibold text-xs mt-1 mr-4 underline'>({profile.job_categoery.job_category})</h1>
        </div>
        <div className='font-semibold text-base'>
          Passionate <span className='font-bold'>{profile.sub_categoery?.sub_category_name}</span> with a flair for creating memorable visual identities
        </div>
      </div>
      <div className='flex mt-2'>
        <span className='text-base font-bold '>
          {profile?.experience_years} Year Exerience
        </span>
        {/* <NavLink to={``} className="text-blue-500 font-semibold border border-solid border-blue-500 rounded hover:bg-blue-500 hover:text-white py-1 mx-auto px-2">
        <button >Show Profile</button>
      </NavLink> */}

        <a href={profile?.portfolio_link} target='_blank' className='text-blue-500 cursor-pointer mr-4 ml-auto'><LanguageIcon /> </a>
      {
        profile.intern.id == Cookies.get("user") ? <NavLink to={`/update-profile/${profile?.id}/`}> <ModeEditIcon /> </NavLink> : null
      }
      </div>
    </div>
  );
}

