import React from 'react';
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import {useSelector} from "react-redux";

const sidebarItem = [
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <FaHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },
]

const Sidebar = () => { 
    const open = useSelector((store)=>store.app.open);
     
    return (
        <div className={`relative left-0 ${open? "w-[16%]" : "w-[6%]"} p-4 h-[calc(100vh-4.625rem)] bg-white overflow-y-auto overflow-x-hidden fixed`}>
            {
                sidebarItem.map((item, index) => {
                    return (
                        <div key={index} className='flex my-3 ml-2'>
                            {item.icons}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar;