//Import own components
import MovileDesing from "./MovileDesing/MovileDesing"
import DesktopDesing from "./DesktopDesing/DesktopDesing"

export default function Authenticated({ styles, user, logout }) {
    return (
        <>
           <MovileDesing styles={styles} user={user} logout={logout} />

            <DesktopDesing styles={styles} user={user} logout={logout} />
        </>
    )
}
