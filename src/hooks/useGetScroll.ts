import { useEffect, useState } from 'react'

const useGetScroll = () => {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    if (typeof window === undefined) return

    const end = window.innerHeight

    const getScrollPos = () => {
      const currentScroll = window.scrollY
      if (currentScroll >= 0 && currentScroll <= end) {
        setPercentage((currentScroll / end) * 100)
      } else if (currentScroll > end) {
        setPercentage(100)
      } else setPercentage(0)
    }

    window.addEventListener('scroll', getScrollPos, {
      passive: true,
      capture: false,
    })
    return () => window.removeEventListener('scroll', getScrollPos)
  }, [])
  return percentage
}

export { useGetScroll }
