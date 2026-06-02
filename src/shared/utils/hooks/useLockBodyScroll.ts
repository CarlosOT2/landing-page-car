import { useEffect } from 'react'

/**
 * **Locks the body scroll while the component is mounted or enabled**
 *
 * Prevents the page from scrolling by setting the body's position to
 * `fixed` and preserves the current scroll position. When unlocked or
 * unmounted, the original scroll position is restored.
 *
 * @param lock Determines whether body scrolling should be locked.
 */
export default function useLockBodyScroll(lock: boolean) {
    useEffect(() => {
        if (!lock) return
        const scrollY = window.scrollY
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.width = '100%'
        return () => {
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            window.scrollTo(0, scrollY)
        }
    }, [lock])
}