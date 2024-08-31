import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700`;

const JobExperienceInputArr = [
  {
    type: "dynamic",
    id: "job_categoery",
    name: "job_categoery",
    required: true,
    placeholder: "Select Job Category",
    icon: <WorkIcon className={iconCss} />,
  },
  {
    type: "dynamic",
    id: "sub_categoery",
    name: "sub_categoery",
    required: true,
    placeholder: "Select Job Sub Category",
    icon: <WorkIcon className={iconCss} />,
  },
  {
    type: "text",
    id: "company_name",
    name: "company_name",
    required: true,
    placeholder: "Enter Company Name",
    icon: <BusinessCenterIcon className={iconCss} />,
  },
  {
    type: "text",
    id: "location",
    name: "location",
    required: true,
    placeholder: "Enter Location",
    icon: <LocationOnIcon className={iconCss} />,
  },
  {
    type: "date",
    id: "start_date",
    name: "start_date",
    required: true,
    placeholder: "Select Start Date",
    icon: <DateRangeIcon className={iconCss} />,
  },
  {
    type: "date",
    id: "end_date",
    name: "end_date",
    required: false,
    placeholder: "Select End Date",
    icon: <DateRangeIcon className={iconCss} />,
  },
  {
    type: "dynamic",
    id: "skills_accuired",
    name: "skills_accuired",
    required: true,
    placeholder: "Skills Acquired",
    icon: <CheckBoxIcon className={iconCss} />,
  },
  {
    type: "textarea",
    id: "desc",
    name: "desc",
    required: true,
    helpingText : "Describe your experience like what you learn", 
    placeholder: "Describe Your Experience",
    icon: <WorkHistoryIcon className={iconCss} />,
  },
];

export default JobExperienceInputArr;
