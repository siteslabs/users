import {
  ChatIcon,
  CheckedListIcon,
  CoinIcon,
  ImageIcon,
  ListIcon,
  LogoutIcon,
  PieIcon,
  UserIcon,
  UsersIcon,
} from "assets/icons";
import { urls } from "configs/routes/const";

export const navList = [
  {
    icon: <PieIcon />,
    text: "Аналитика",
    path: "/analytics",
  },
  {
    icon: <UserIcon />,
    text: "Профиль",
    path: "/profile",
  },
  {
    icon: <CheckedListIcon />,
    text: "Модерация",
    path: "/moderation",
  },
  {
    icon: <ChatIcon />,
    text: "Чаты",
    path: "/chats",
  },
  {
    icon: <ImageIcon />,
    text: "Баннеры",
    path: "/banners",
  },
  {
    icon: <UsersIcon />,
    text: "Команда",
    path: urls.team.path,
  },
  {
    icon: <ListIcon />,
    text: "Блог",
    path: "/blog",
  },
  {
    icon: <CoinIcon />,
    text: "Курс валют",
    path: "/currency",
  },
  {
    icon: (
      <span className="fill-green-500">
        <LogoutIcon />
      </span>
    ),
    text: <span className="text-danger-regular">Выйти</span>,
    path: "/",
  },
];
