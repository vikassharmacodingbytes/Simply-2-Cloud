import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700`;


const SendHiringEmailArray = [
  {
    type: "text",
    id: "user_image",
    name: "user_image",
    required: false,
    placeholder: "Upload Your Image",
    icon: <WorkIcon className={iconCss} />,
  },
  {
    type: "textarea",
    id: "user_image",
    name: "user_image",
    required: false,
    placeholder: "Upload Your Image",
    icon: <WorkIcon className={iconCss} />,
  },
  ];

  export default SendHiringEmailArray