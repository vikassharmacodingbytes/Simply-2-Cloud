import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LinkIcon from "@mui/icons-material/Link";
import { Star } from "@mui/icons-material";

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700`;

const internSkillInputArr = [
  {
    type: "dynamic",
    id: "skillName",
    name: "skill_name",
    required: true,
    placeholder: "Enter Skill Name",
    icon: <WorkIcon className={iconCss} />
  },
  {
    type: "number",
    id: "experienceYears",
    name: "years_of_experience",
    required: true,
    placeholder: "Enter Years of Experience",
    icon: <CalendarTodayIcon className={iconCss} />
  },
  {
    type: "url",
    id: "portfolioLink",
    name: "portfolio_link",
    required: false, // Adjust as needed
    placeholder: "Enter Portfolio or Github Link",
    icon: <LinkIcon className={iconCss} />
  },
  {
    type: "select",
    id: "level",
    name: "experience_level",
    required: false, 
    options : [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10],
    placeholder: "Experience Level",
    icon: <Star className={`${iconCss} text-yellow-300`} />
  },
  {
    type: "file",
    id: "user_image",
    name: "user_image",
    required: false,
    placeholder: "Upload Project Image",
    icon: <WorkIcon className={iconCss} />,
  },
];

export default internSkillInputArr;
