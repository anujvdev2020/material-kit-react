import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Home",
    path: "/",
    icon: <img src="/assets/category.png" height={"24px"} width={"24px"} />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: (
      <img src="/assets/msgs.png" height={"24px"} width={"24px"} />
    ),
  },
  {
    title: "Tasks",
    path: "/companies",
    icon: (
      <img src="/assets/tasks.png" height={"24px"} width={"24px"} />
    ),
  },
  {
    title: "Members",
    path: "/account",
    icon: (
      <img src="/assets/profile.png" height={"24px"} width={"24px"} />
    ),
  },
  {
    title: "Settings",
    path: "/settings",
    icon: (
      <img src="/assets/settings.png" height={"24px"} width={"24px"} />
    ),
  },
];

export const tabs=[
  {
    title: "Mobile App",
    path: "/",
    icon: <img src="/assets/greencircle.png" height={"8px"} width={"8px"} />,
  },
  {
    title: "Website Redesign",
    path: "/",
    icon: <img src="/assets/greencircle.png" height={"8px"} width={"8px"} />,
  },
  {
    title: "Design System",
    path: "/",
    icon: <img src="/assets/greencircle.png" height={"8px"} width={"8px"} />,
  },
  {
    title: "Wireframes",
    path: "/",
    icon: <img src="/assets/greencircle.png" height={"8px"} width={"8px"} />,
  },
];

