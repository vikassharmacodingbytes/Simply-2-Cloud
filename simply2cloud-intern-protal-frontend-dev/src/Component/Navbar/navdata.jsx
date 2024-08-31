import { Chat, ChatBubble, ChatOutlined, Message, MessageTwoTone, NotificationAdd, Notifications } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Cookies from "js-cookie";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

const navItem = [
  {
    id: 1,
    label: "Home",
    link: "/",
    visibility: "both",
    user: "any",
  },
  // {
  //   id: 9,
  //   label: "My Profile",
  //   link: "/my-profile",
  //   visibility: "login",
  //   user: "user",
  // },
  {
    id: 2,
    label: "Find Internship",
    link: "/nm-jobs",
    visibility: "logout",
    user: "any",
  },
  // {
  //   id: '2a',
  //   label: "Find Internship",
  //   link: "/nm-jobs",
  //   visibility: "login",
  //   user: "user",
  // },
  {
    id: 3,
    label: " Jobs",
    link: "#",
    visibility: "login",
    user: "company",
    option: [
      {
        id: 4,
        label: "Post New Jobs",
        link: "/post-new-jobs",
        visibility: "login",
        user: "company",
      },
      {
        id: 3,
        label: "Manage Jobs",
        link: "/post-jobs",
        visibility: "login",
        user: "company",
      }
    ]
  },
  {
    id: 17,
    icon: <Notifications />,
    label: "Notifications",
    link: "/notifications",
    visibility: "login",
    user: "company"
  },
  {
    id: 18,
    label: "Inbox",
    icon: <ChatOutlined />,
    link: "/chat",
    visibility: "login",
    user: "company"
  },

  {
    id: 5,
    label: "Job Application",
    link: "#",
    visibility: "login",
    user: "company",
    option: [
      {
        id: 6,
        label: "Approved Application",
        link: "/job-application-approved",
        visibility: "login",
        user: "company",
      },
      {
        id: 7,
        label: "Job Application",
        link: "/job-application",
        visibility: "login",
        user: "company",
      },
      {
        id: 8,
        label: "Rejected Application",
        link: "/job-application-rejected",
        visibility: "login",
        user: "company",
      },
      {
        id: 8,
        label: "Logout",
        link: "/logout",
        visibility: "login",
        user: "company",
      },
    ],
  },
  {
    id: 9,
    label: "My Application",
    link: "/my-application",
    visibility: "login",
    user: "user",
  },
  {
    id: 13,
    label: "Sign in",
    link: "/login",
    visibility: "logout",
    user: "any",
  },
  {
    id: 12,
    label: "Sign up",
    link: "/signup",
    visibility: "logout",
    user: "any",
  },
  {
    id: 14,
    icon: <Notifications />,
    label: "Notifications",
    link: "/notifications",
    visibility: "login",
    user: "user"
  },
  {
    id: 15,
    label: "Inbox",
    icon: <ChatOutlined />,
    link: "/chat",
    visibility: "login",
    user: "user"
  },
  {
    id: 16,
    label: "Accounts",
    icon: <AccountCircleIcon />,
    link: "#",
    visibility: "login",
    user: "user",
    option: [
      {
        id: "16b",
        label: "Preview Profile",
        link: `intern-details/${Cookies.get("profile_id")}`,
        visibility: "login",
        user: "company",
      },
      {
        id: "16c",
        label: "Settings",
        link: "/profile",
        visibility: "login",
        user: "company",
      },
      {
        id: "16a",
        label: "My Application",
        link: "/my-application",
        visibility: "login",
        user: "company",
      },
      {
        id: "16c",
        label: "Logout",
        link: "/logout",
        visibility: "login",
        user: "company",
      },
    ],
  }
];

export default navItem;
