import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../providers/auth-provider'

export default function DefaultLayout() {
   const { auth } = useAuth()
   const { pathname } = useLocation()

   return (
      <React.Fragment>
         {auth && pathname === '/login' ? <Navigate to={'/'} replace /> : <Outlet />}
      </React.Fragment>
   )
}
