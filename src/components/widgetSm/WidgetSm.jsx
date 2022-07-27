import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  const userData = [
    {
      fullName: "Mabel Klein",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      title: "Software Engineer",
    },
    {
      fullName: "Randall Ruiz",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      title: "Backend Developer",
    },
    {
      fullName: "Marguerite Richardson",
      profileUrl: "https://i.pravatar.cc/300",
      title: "Quality Engineer",
    },
    {
      fullName: "Mabel Klein",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      title: "Software Engineer",
    },
    {
      fullName: "Randall Ruiz",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      title: "Backend Developer",
    },
    {
      fullName: "Marguerite Richardson",
      profileUrl: "https://i.pravatar.cc/300",
      title: "Quality Engineer",
    },
    {
      fullName: "Mabel Klein",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      title: "Software Engineer",
    },
    {
      fullName: "Randall Ruiz",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      title: "Backend Developer",
    },
    {
      fullName: "Marguerite Richardson",
      profileUrl: "https://i.pravatar.cc/300",
      title: "Quality Engineer",
    },
  ];

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>

      <ul className="widgetSmList">
        {userData.map((val) => {
          return (
            <li className="widgetSmListItem">
              <div className="widgetSmUserInfo">
                <img src={val.profileUrl} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{val.fullName}</span>
                  <span className="widgetSmUserTitle">{val.title}</span>
                </div>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" /> Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
