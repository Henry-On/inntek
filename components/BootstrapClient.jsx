'use client'

import { useEffect } from 'react'

const BootstrapClient = () => {
  useEffect(() => {
    import('@/public/bootstrap/js/bootstrap.bundle.min.js')
  }, [])

  return null
}

export default BootstrapClient