import React from "react";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="menu">
                <ul>
                    <li><a href={"/"}>Европа</a></li>
                    <li><a href={"/"}>Азия</a></li>
                    <li><a href={"/"}>Северная Америка</a></li>
                    <li><a href={"/"}>Южная Америка</a></li>
                    <li><a href={"/"}>Африка</a></li>
                    <li><a href={"/"}>Австралия и Океания</a></li>
                </ul>
            </div>
            <div className="sidebar_box">
                <h3>Подзаголовок</h3>
                <div className="side_box">что-то здесь</div>
                <div className="side_box">и здесь...</div>
            </div>
        </div>
    );
}

export default Sidebar;