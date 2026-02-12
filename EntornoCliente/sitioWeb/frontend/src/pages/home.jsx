import { useContext } from "react";
import { HeaderWithLogin } from "../components/headerWithLogin";
import { HeaderWithoutLogin } from "../components/headerWithoutLogin";
import { userContext } from "../App";

export function Home() {
    const {user, setUser} = useContext(userContext);

    return (
        <>
            {user !== undefined ? <HeaderWithLogin /> : <HeaderWithoutLogin />}
        </>
    );
}