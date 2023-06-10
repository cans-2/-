import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "next/link";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const mainListItems = (
  <React.Fragment>
    <Link href="/dashbord">
      <ListItemButton className="pl-[22px] pr-0">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="ダッシュボード" />
      </ListItemButton>
    </Link>
    <Link href="/calendar">
      <ListItemButton className="pl-[22px] pr-0">
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="カレンダー" />
      </ListItemButton>
    </Link>
    <Link href="/client">
      <ListItemButton className="pl-[22px] pr-0">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="顧客一覧" />
      </ListItemButton>
    </Link>
    <Link href="/staff">
      <ListItemButton className="pl-[22px] pr-0">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="スタッフ一覧" />
      </ListItemButton>
    </Link>
    <Link href="/menu">
      <ListItemButton className="pl-[22px] pr-0">
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="メニュー" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
