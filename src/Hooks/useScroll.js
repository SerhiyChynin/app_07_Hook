import { useEffect } from "react";
import { useRef } from "react";
export default function useScroll(parantRef, childRef, callback) {

    const observer = useRef();
    useEffect(() => {
        const options = {
        root: parantRef.current,
        rootMargin: '0px',
        threshold: 0
        }
        observer.current = new IntersectionObserver(([target,]) => {
            if (target.isIntersecting)
                console.log('intersected');
            callback()
        }, options)
        
        observer.current.observe(childRef.current)

        return function () {
        observer.current.unobserve(childRef.current)
            
        }
    }, [callback]);
};