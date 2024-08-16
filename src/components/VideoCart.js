import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_KEY from '../constant/youtube';


const VideoCart = ({item}) => {
    const [ytIcon, setYtIcon] = useState("");
    const getYoutubeChannelName = async () =>{
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
            console.log("image");
            console.log(res.data.items[0].snippet.thumbnails.high.url);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getYoutubeChannelName();
    },[])

    return (
        <div className='w-[22rem] bg-white mx-2 cursor-pointer my-2 p-2'>
            <img className='rounded-md w-full' src={item.snippet.thumbnails.medium.url} alt="ytvideo" />
            <div>
                <div className='flex mt-2'>
                    <div className='w-[14%]'><img className='rounded-full' src={ytIcon} alt='ytIcon' /></div>
                    <div className='ml-2 text-wrap'>
                        <h1 className='font-bold text-sm'>{item.snippet.title}</h1>
                        <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCart;