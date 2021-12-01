import react, { useContext } from "react"
import { UserContext, ColorContext } from "../contexts/myprofile";

const ContentData = () => {
    const user = useContext(UserContext)
    const color = useContext(ColorContext)
    console.log(user, color)
    return (
        <>
            <ul style={{ color: color }}>
                <li>
                    Nom :{user.name}
                </li>
                <li>
                    Age :{user.age}
                </li>
            </ul>
        </>
    )
}

export default ContentData;