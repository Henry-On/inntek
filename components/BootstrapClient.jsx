'use client'

import { useEffect } from 'react'

const BootstrapClient = () => {
  useEffect(() => {
    import('@/public/bootstrap/js/bootstrap.bundle.min.js')
    import('@/js/main.js')
  }, [])

  return null
}

export default BootstrapClient