import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Dashboard from './links/Dashboard'
import Tasks from './links/Tasks'
import Staffs from './links/Staffs'
import Costomers from './links/Costomers'
import Inventory from './links/Inventory'

const Home = () => {
  return (
    <div>
        <Sidebar />
        <Topbar />
        {/*<Dashboard />
        <Staffs />
        <Costomers />
         <Tasks /> 
        */}
        <Inventory />
    </div>
  )
}

export default Home
