import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import NoPage from "./NoPage";

const Protect_route: FunctionComponent<{ allow: boolean }> = (props) => {
    if(props.allow) {
        return <Outlet/>
    } else {
        return <NoPage/>
    }
}

export default Protect_route;