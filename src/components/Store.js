import base from '../css/Base.module.css';

import { Outlet } from "react-router-dom";

function Store() {
    return (
        <section className={ base.content }>
            <Outlet/>
        </section>
    )
}

export default Store;