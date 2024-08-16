import React from 'react';

// import Feed from './Feed';
import {Outlet} from 'react-router-dom';
import Sidebar from './SideBar';
 

const Body = () => {
  return (
    <div className="flex mt-14">
        <Sidebar/>
        <Outlet/>
      </div>
  )
}

export default Body;