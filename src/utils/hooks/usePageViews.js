import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGa from 'react-ga'
import { GA } from 'constants/index'

export function usePageViews() {
  // Location just available when usePageViews stay inside the React-Router's component
  let { pathname } = useLocation()
  useEffect(() => {
    ReactGa.initialize(GA.ID)
  }, [])
  useEffect(() => {
    ReactGa.pageview(pathname)
    console.log('Send pageview', pathname)
  }, [pathname])
}
