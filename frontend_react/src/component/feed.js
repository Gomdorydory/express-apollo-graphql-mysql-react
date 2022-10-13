import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { FeedStateContext } from "../App";

import Buttons from "./buttons";
import "./feed.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
const Heart = <FontAwesomeIcon icon={faHeart} />;
const Comment = <FontAwesomeIcon icon={faComment} />;
const PaperPlane = <FontAwesomeIcon icon={faPaperPlane} />;

// graphql 모듈

// gql example
const querydata = gql`
  {
    feed {
      id
      user
      pic
      content
      date
    }
  }
`;

const Feed = () => {
  const { loading, error, data } = useQuery(querydata);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error..:/</p>;

  console.log(data);
  console.log(data.feed);
  console.log(data.feed[0].id);

  return data.feed.map((feed) => (
    <div className="feed">
      <div className="FeedHeader">
        <div className="profilePicture"></div>
        <div className="userId">{feed.user}</div>
        <div className="empty"></div>
        <div className="more">...</div>
      </div>
      <div className="FeedPicture">{feed.pic}</div>
      <div className="FeedReact">
        <Buttons text={Heart} />
        <Buttons text={Comment} />
        <Buttons text={PaperPlane} />
      </div>
      <div className="Feedcontent">
        <span className="userIdInContent">{feed.user}</span>
        <span className="Feedcontent"> {feed.content} </span>
      </div>
      <div className="Feedfooter">
        <div className="comment"> 댓글 {feed.userComment}개 보기</div>
        <div className="date">{feed.date}</div>
      </div>
    </div>
  ));
};

export default Feed;
