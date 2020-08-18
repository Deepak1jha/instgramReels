import React from "react";
import "../footer/Footer.css"
import {Avatar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import Ticker from "react-ticker";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
export default function Footer({channel, avatarSrc, song, likes, shares}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <Avatar src={avatarSrc}/>
        <h3>
          {channel} . <Button> follow</Button>
        </h3>
      </div>
      <div className="videoFooter_ticker">
        <MusicNoteOutlinedIcon className="videoFooter_icon"/>
        <Ticker mode={"smooth"}>
          {({index}) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter_actions">
        <div className="videoFooter_actions_left">
          <FavoriteBorderOutlinedIcon fontSize={"large"}/>
          <ModeCommentOutlinedIcon fontSize={"large"}/>
          <SendOutlinedIcon fontSize={"large"}/>
          <MoreHorizOutlinedIcon fontSize={"large"}/>
        </div>
        <div className="videoFooter_actions_right">
          <div className="videoFooter_stat">
            <FavoriteBorderOutlinedIcon/>
            <p>{likes}</p>
          </div>
          <div className="videoFooter_stat">
            <ChatBubbleOutlinedIcon/>
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  )

}
