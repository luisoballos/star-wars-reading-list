import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ErrorPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    })
    return (
        <h1>Error 404</h1>
    )
}