import Likes from "./Likes";
import Comments from "./Comments";
import { useState } from "react";

function VideoInfo({data}){
    const [showButton, setShowButton] = useState(true);

    return <>
        <h2>{data.title}</h2>
        <h5>{data.views} Views | Uploaded at {data.createdAt}</h5>
        <Likes likes={data.upvotes} dislikes={data.downvotes}/><br></br><br></br>
        <button onClick={_ => setShowButton(!showButton)}>{showButton ? "Hide Comments" : "Show Comments"}</button>
        <hr></hr>
        {showButton ? <Comments comments={data.comments}/> : null}
    </>
}
export default VideoInfo;