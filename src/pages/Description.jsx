import { useEffect } from 'react'
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Description = () => {
    const { store, dispatch } = useGlobalReducer()
    

    return (
        <p>Description</p>
    )
}