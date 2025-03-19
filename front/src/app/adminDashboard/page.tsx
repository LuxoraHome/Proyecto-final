import AdminDashboardView from '@/views/AdminDashboardView'
import React from 'react'
import { useAuth } from '@/context/AuthContext'

const page = () => {
  return (
    <div>
      <AdminDashboardView/>
    </div>
  )
}

export default page
