import React from 'react'
import GroupList from './grouplist/GroupList'
import { Outlet } from 'react-router-dom'
import CreateGroupCard from './creategroupcard/CreateGroupCard'

function Home() {
  return (
    <div className='app-container'>
        <GroupList />
        {/* <CreateGroupCard /> */}
        <Outlet />
    </div>
  )
}

export default Home