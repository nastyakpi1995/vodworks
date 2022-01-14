import {useEffect, useState} from "react";

const useKey = (targetKey: string, callback: () => void) => {
    const downHandler = (e: KeyboardEvent) => {
        e.preventDefault()
        if (e.key === targetKey) {
            callback()
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, []);
}

export default useKey