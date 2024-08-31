
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationCity";
import CheckCircleIcon from "@mui/icons-material/Check";


const design = "absolute top-2 border-r border-black peer-focus:text-violet-700"

 const registerInputArr = [
        {
          type: "text",
          id: "internName",
          name: "internName",
          required: true,
          placeholder: "Enter Name",
          icon: <PersonIcon className={design} />
        },
        {
          type: "tel",
          id: "phone",
          name: "phone",
          required: true,
          placeholder: "Enter Your Phone Number",
          icon: <PhoneIcon className={design} />
        },
        {
          type: "email",
          id: "email",
          name: "email",
          required: true,
          placeholder: "Enter Your Email",
          icon: <EmailIcon className={design} />
        },
        {
          type: "password",
          id: "password",
          name: "password",
          required: true,
          placeholder: "Enter Your Password",
          icon: <LockIcon className={design} />
        },
        {
          type: "password",
          id: "password2",
          name: "password2",
          required: true,
          placeholder: "Confirm Password",
          icon: <LockIcon className={design} />
        },
        {
          type: "textarea",
          id: "location",
          name: "location",
          required: true,
          placeholder: "Enter Your Address",
          icon: <LocationOnIcon className={design} />
        },
        {
          type: "checkbox",
          id: "certified",
          name: "certified",
          required: true,
          placeholder: "I am certified By Simply 2 Cloud",
          icon: <CheckCircleIcon className={design} />
        }
      ];

      export default registerInputArr;