import React from 'react'
import UsersListStatus from './UsersListStatus'
import CreateOfert from './CreateOfert'
import AdminProfile from './AdminProfile'

const AdminDashboard = () => {
  return (
    <div>
      <AdminProfile/>
      <UsersListStatus/>
      <CreateOfert/>
    </div>
  )
}

export default AdminDashboard
