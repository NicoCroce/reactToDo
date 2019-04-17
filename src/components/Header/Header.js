import React from 'react';

const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
                <span>TASKS</span>
                <span className="badge badge-pill badge-light ml-2"> {props.todoCount} </span>
            </a>
        </nav>
    )
}

export default Header;