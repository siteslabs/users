import React, { PropsWithChildren } from "react";
import cn from "classnames";

import { Avatar } from "UI/Avatar";
import { BarsIcon, LogoIcon } from "assets/icons";

import { navList } from "./const";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectIsSidebarOpened } from "store/sidebar/selector";
import { closeSidebar, openSidebar } from "store/sidebar/slice";

const Sidebar: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isShown = useAppSelector(selectIsSidebarOpened);

  const hideSidebar = () => dispatch(closeSidebar());
  const showSidebar = () => {
    if (!isShown) {
      dispatch(openSidebar());
    }
  };

  return (
    <div className="bg-default-20">
      <div
        onClick={showSidebar}
        className={cn(
          "fixed left-0 top-0 z-10 h-screen w-full rounded-tr-[15px] bg-default-5 pt-10 transition-all duration-75 lg:max-w-[15.25rem]",
          {
            "-translate-x-full lg:w-[6.25rem] lg:translate-x-0 lg:justify-center":
              !isShown,
          }
        )}
      >
        <div
          className={cn("mb-5 cursor-pointer transition-all", {
            "flex justify-center": !isShown,
            "w-fit pl-3.5": isShown,
          })}
          onClick={hideSidebar}
        >
          {/* INFO: BarsIcon is according to design, but it might be more correct to change to "x" Icon */}
          {isShown ? <BarsIcon /> : <LogoIcon />}
        </div>
        <div
          className={cn("flex items-center space-x-3 transition-all", {
            "justify-center": !isShown,
            "ml-3.5": isShown,
          })}
        >
          <Avatar />
          <div className={cn({ hidden: !isShown })}>
            <div className="font-medium text-blue-grey-regular">
              Артем Иванов
            </div>
            <div className="text-sm text-default-50">Собственник</div>
          </div>
        </div>
        <ul className="mt-3">
          {navList.map(({ icon, text, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={cn(
                  "flex cursor-pointer items-center py-[13px] transition-all hover:bg-default-10",
                  {
                    "px-3.5": isShown,
                    "justify-center": !isShown,
                  }
                )}
              >
                <span
                  className={cn({
                    "mr-4": isShown,
                  })}
                >
                  {icon}
                </span>
                <span
                  className={cn("text-default-50", {
                    hidden: !isShown,
                  })}
                >
                  {text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cn(
          "min-h-screen bg-default-5 transition-all duration-75 lg:bg-default-20",
          {
            "lg:ml-[244px]": isShown,
            "lg:ml-[100px]": !isShown,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
