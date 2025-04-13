import { useEffect, useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div>
			<p>Home</p>
		</div>
	);
}; 