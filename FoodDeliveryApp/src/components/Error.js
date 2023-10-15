import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError()

    return (<>
        <h1>Oops</h1>
        <h2>Something went wrong !!</h2>
        <h1>{err.status} : {err.statusText}</h1>
        <h6>{err.data}</h6>
    </>)
}
export default Error;