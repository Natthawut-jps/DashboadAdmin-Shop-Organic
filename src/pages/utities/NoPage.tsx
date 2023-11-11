import { Navigate } from "react-router-dom";
import { FunctionComponent } from "react";

export const NoPage: FunctionComponent = () => {
    return <Navigate to={'/'} replace={true}/>
  };
  