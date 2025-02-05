import { useRouteError } from "react-router-dom";
const Error = () => {
    const {status, statustext} = useRouteError();
    return <div className="error__container">
        <h1>Oops!! Something went wrong</h1>
        <h2>{`${status} ${statustext}`}</h2>
    </div>
}
export default Error;