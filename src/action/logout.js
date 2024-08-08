import { useAuth } from "../components/providers/auth-provider"

export const logOut = (setAuth) => {
   window.localStorage.clear()
   setAuth(null)
}