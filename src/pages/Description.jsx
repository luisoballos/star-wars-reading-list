import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Description = () => {
    const { store, _ } = useGlobalReducer();
    const { parent, id } = useParams();

    const properties = store[parent][id].properties;

    return (
        <div style={{ color: "white" }} className="m-5 px-5 border">
            <h1 className="text-center display-1 mb-3">{properties.name}</h1>
            <div className="gap-4">
                {Object.entries(properties).map(([key, value], i) => (
                    <ul key={i} className="row min-vw-100">
                        <li>{key}</li>
                        <li>{value}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
};