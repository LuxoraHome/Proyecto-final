import React from 'react'
import UsersListStatusView from './UsersListStatusView'
import CreateOffertView from './CreateOfferView'
import StatsBuyersViews from './StatsBuyersViews'
import StatsLoguersView from './StatsLoguersView'
import StatsUsersView from './StatsUsersView'
import GetOffersView from './GetOffersView'
import StatsOrdersView from './StatsOrdersView'

const AdminDashboardView = () => {
  return (
    <div className="space-y-8">
      <UsersListStatusView />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-4/5 mx-auto">
        <div className="flex-1 h-full p-6 bg-white rounded-lg shadow-lg border border-gray-200 flex justify-center items-center">
          <StatsBuyersViews />
        </div>
        <div className="flex-1 h-full p-6 bg-white rounded-lg shadow-lg border border-gray-200 flex justify-center items-center">
          <StatsLoguersView />
        </div>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-4/5 mx-auto">
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <StatsUsersView />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <StatsOrdersView />
        </div>
      </div>

      <div className="space-y-6 w-4/5 mx-auto">
        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <CreateOffertView />
        </div>

        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <GetOffersView />
        </div>
      </div>


    </div>
  )

}

export default AdminDashboardView
