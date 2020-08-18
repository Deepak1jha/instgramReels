import React from "react";
import "../header/Header.css"
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

export default function Header() {

  return (
    <div className="videoHeader">
      <ArrowBackIosOutlinedIcon/>
      <h3>Reels</h3>
      <CameraAltOutlinedIcon/>
    </div>
  )

}
