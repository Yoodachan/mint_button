import base from '../css/Base.module.css';
import user from '../css/User.module.css';

import { Outlet } from "react-router-dom";

function User () {
    return (
        <section className={ `${base.content} ` }>
            <Outlet/>
        </section>
    )
}

export default User;