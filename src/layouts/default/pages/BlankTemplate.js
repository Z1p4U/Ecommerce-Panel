import { Outlet, useNavigate } from "react-router-dom"
import { Notification } from "../../../shares/Notification"
import { getData } from "../../../helpers/localstorage"
import { keys } from "../../../constants/config"
import { useEffect } from "react"

export const BlankTemplate = () => {
    
    const token = getData(keys.API_TOKEN);
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            navigate('/');
        }
    },[navigate, token]);

    return(
        <>
            { !token && (
                <div style={{background: "#f7f7f7", height: "100vh"}}>
                    <Notification />
                    <Outlet />
                </div>
            )}
        </>
    )
}