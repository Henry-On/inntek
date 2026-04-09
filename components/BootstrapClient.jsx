'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const BootstrapClient = () => {
  const pathname = usePathname()

  useEffect(() => {
    // Load scripts sequentially to ensure dependencies
    const loadScripts = async () => {
      try {
        await import('@/public/bootstrap/js/bootstrap.bundle.min.js')
        await import('@/public/gsap/minified/gsap.min.js')
        await import('@/public/gsap/plugins/scrollTrigger.min.js')
        await import('@/js/main.js')
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadScripts()
  }, [pathname])

  return null
}

export default BootstrapClient