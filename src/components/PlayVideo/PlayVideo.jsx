import React, { use, useEffect } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment/moment'
import { useState} from 'react';

const PlayVideo = ({videoId}) => {

    const [apiData,setApiData] = useState(null);

    const [channelData,setChannelData] = useState(null);

    const [commentData,setCommentData] = useState(null);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
    }

    const fetchOtherData = async() => {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));
        const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));
    }
    useEffect(()=>{
        fetchVideoData();
    },[])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])

  return (
    <div className='play-video'>
        {/*<video src={video1} controls autoPlay muted></video>*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Loading..."}</h3>
        <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):"57k"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "Few days ago"}</p>
            <div>
                <span><img src={like} alt="Like" />{apiData?value_converter(apiData.statistics.likeCount):""}</span>
                <span><img src={dislike} alt="Dislike" />{apiData?value_converter(apiData.statistics.dislikeCount):""}</span>
                <span><img src={share} alt="Share" />Share</span>
                <span><img src={save} alt="Save" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:"No title"}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1"} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData?apiData.snippet.description.slice(0,250):"No description available"}</p>
            <hr />
            <h4>{apiData?value_converter(apiData.statistics.commentCount):"0"} comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nick <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo