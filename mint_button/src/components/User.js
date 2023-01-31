import base from '../css/Base.module.css';
import user from '../css/User.module.css';

import { Outlet } from "react-router-dom";

function User () {
    return (
        <section className={ `${user.content_user} ${user.position}` }>
            <Outlet/>
        </section>
    )
}

export default User;