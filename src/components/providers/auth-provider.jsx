import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(false)

export default function AuthProvider({ children }) {
   const [auth, setAuth] = useState(window.localStorage.getItem('auth-token') || false)

   return (
      <AuthContext.Provider value={{ auth, setAuth }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   const context = useContext(AuthContext)

   if (!context) {
      throw error('Error')
   }

   return context
}
