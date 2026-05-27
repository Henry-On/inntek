'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const BootstrapClient = () => {
  const pathname = usePathname()

  useEffect(() => {
    let cleanupApp
    let isMounted = true

    // Load scripts sequentially to ensure dependencies
    const loadScripts = async () => {
      try {
        await import('@/public/bootstrap/js/bootstrap.bundle.min.js')
        
        // Now import and run the main script
        const { default: initApp } = await import('@/js/main.js')
        if (isMounted) {
          cleanupApp = initApp()
        }
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadScripts()

    return () => {
      isMounted = false
      cleanupApp?.()
    }
    
  }, [pathname])

  return null
}

export default BootstrapClient
