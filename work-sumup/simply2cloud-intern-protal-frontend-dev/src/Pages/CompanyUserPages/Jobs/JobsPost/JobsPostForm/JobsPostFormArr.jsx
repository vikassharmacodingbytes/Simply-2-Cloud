import WorkIcon from "@mui/icons-material/Work";
import { Star } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SchoolIcon from "@mui/icons-material/School";
import { TimeToLeave } from "@mui/icons-material";

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700`;

const jobFields = [
  {
    type: "dynamic",
    id: "job_categoery",
    name: "job_categoery",
    required: true,
    placeholder: "Please Select Job Categoery",
    icon: <WorkIcon className={iconCss} />,
  },
  {
    type: "dynamic",
    id: "sub_categoery",
    name: "sub_categoery",
    required: true,
    placeholder: "Please Select Job SubCategoery",
    icon: <WorkIcon className={iconCss} />,
  },
  // {
  //   type: "text",
  //   id: "job_title",
  //   name: "job_title",
  //   required: true,
  //   placeholder: "Enter Job Title",
  //   icon: <WorkIcon className={iconCss} />,
  // },
  {
    type: "dynamic",
    id: "skills_required",
    name: "skills_required",
    required: true,
    placeholder: "Enter Required Skills",
    icon: <PsychologyIcon className={iconCss} />,
  },
  {
    type: "dynamic",
    id: "skills_preferred",
    name: "skills_preferred",
    required: false,
    placeholder: "Enter Preferred Skills ",
    icon: <PsychologyIcon className={iconCss} />,
  },
  // {
  //   type: "number",
  //   id: "salary",
  //   name: "salary",
  //   required: true,
  //   placeholder: "Enter Salary",
  //   icon: <AttachMoneyIcon className={iconCss} />,
  // },
  {
    type: "number",
    id: "experience",
    name: "experience",
    required: true,
    placeholder: "Enter Required Experience Year",
    icon: <Star className={`${iconCss} text-yellow-300`} />,
  },
  {
    type: "select",
    id: "education",
    name: "education",
    required: true,
    options: [
      { value: "Diploma", label: "Diploma" },
      { value: "Bachelor Degree", label: "Bachelor Degree" },
      { value: "B.Tech", label: "B.Tech" },
      { value: "12th", label: "12th" },
      { value: "High Scool", label: "High Scool" },
      { value: "Not Required", label: "Not Required" },
    ],
    placeholder: "Enter Required Education",
    icon: <SchoolIcon className={iconCss} />,
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
    type: "select",
    id: "job_commute_type",
    name: "job_commute_type",
    required: true,
    options: [
      { 
        value: "remote",
        label: "Remote" },
      { 
        value: "work_from_home",
        label: "Work From Home" },
      {
        value: "both",
        label: "Work From Home and Remote",
      },
    ],
    placeholder: "Select Job Commute Type",
    icon: <LocationOnIcon className={iconCss} />,
  },
  {
    type: "text",
    id: "timezone_required",
    name: "timezone_required",
    required: true,
    placeholder: "Enter Timezone Required",
    icon: <TimeToLeave className={iconCss} />,
  },
  {
    type: "select",
    id: "qualifications",
    name: "qualifications",
    required: false,
    options: [
      { value: "Diploma", label: "Diploma" },
      { value: "Bachelor Degree", label: "Bachelor Degree" },
      { value: "B.Tech", label: "B.Tech" },
      { value: "Not Required", label: "Not Required" },
    ],
    placeholder: "Enter Qualifications",
    icon: <WorkIcon className={iconCss} />,
  },
  {
    type: "date",
    id: "application_deadline",
    name: "application_deadline",
    required: false,
    date_status: "past",
    placeholder: "Enter Application Deadline",
    icon: <EventIcon className={iconCss} />,
  },
  {
    type: "textarea",
    id: "benefits",
    name: "benefits",
    required: true,
    placeholder: "Enter Benefits",
    icon: <WorkIcon className={iconCss} />,
  },
  {
    type: "textarea",
    id: "responsibilities",
    name: "responsibilities",
    required: true,
    placeholder: "Enter Responsibilities",
    icon: <WorkIcon className={iconCss} />,
  },
];

export default jobFields;
