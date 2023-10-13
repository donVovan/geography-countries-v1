import React from "react";

function Content() {
    return (
        <div className="content">
            <h1>самый главный заголовок</h1>
            <div className="content_container">
                <div className="column_left">Колонка слева</div>
                <div className="column_right">Колонка справа</div>
            </div>
        </div>
    )
}

export default Content;