import React from 'react'
import UsersListStatusView from './UsersListStatusView'
import CreateOffertView from './CreateOfferView'
import AdminProfileView from './AdminProfileView'
import StatsBuyersViews from './StatsBuyersViews'
import StatsLoguersView from './StatsLoguersView'
import StatsOrdersView from './statsOrdersView'
import StatsUsersView from './StatsUsersView'
import GetOffersView from './GetOffersView'

const AdminDashboardView = () => {
  return (
    <div className="space-y-8">
      <AdminProfileView />
      <UsersListStatusView />
      <CreateOffertView />
      <div className="flex w-4/5 mx-auto space-x-4">
        <StatsBuyersViews />
        <StatsLoguersView />
      </div>
      <StatsOrdersView />
      <StatsUsersView />
      <GetOffersView />
    </div>
  )
  
}

export default AdminDashboardView
