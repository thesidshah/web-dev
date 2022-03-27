import React from 'react';
import {Link} from "react-router-dom";

const NavSideBarItem = ({NavItem = {
    to:"/tuiter/home",
    className:"list-group-item nav-link wd-borderless",
    icon:"fas fa-home wd-padded-right",
    text:"Home "
}, active = "explored"}) => {
    // console.log(active);
    return(
        <div className = "nav-item">
            <Link className={(active === "explore" && NavItem.text === "Explore ") || (active === "home" && NavItem.text === "Home ") ? "list-group-item active wd-borderless " : NavItem.className} to={NavItem.to}>
                <i className={NavItem.icon}/><span className = "wd-text">{NavItem.text}</span>
            </Link>
        </div>
    );
};
export default NavSideBarItem;