import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Demo = () => {
  const { store, dispatch } = useGlobalReducer()

  return (
    <div>
      <Link to="/">
          <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};