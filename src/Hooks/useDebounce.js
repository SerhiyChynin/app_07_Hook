import { useCallback } from "react";
import { useRef } from "react";

export default function useDebounced(callback, delay) {

    const timer = useRef();
    const debouncedcallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])
     
    return debouncedcallback;
};