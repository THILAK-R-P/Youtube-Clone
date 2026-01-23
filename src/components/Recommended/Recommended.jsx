import React, { useEffect } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { useState } from 'react'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../Data'

const Recommended = ({categoryId}) => {

    const [apiData,setApiData] = useState([]);
    const fetchData = async () => {
        const relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&maxResults=50&key=${API_KEY}`;
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items || []));

    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className="recommended">
        {apiData.map((item,index)=>{
            return (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{value_converter(item.snippet.channelTitle)}</p>
                        <p>{value_converter(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Recommended