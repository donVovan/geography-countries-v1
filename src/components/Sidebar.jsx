// eslint-disable-next-line react/prop-types
function Sidebar({renderMenu}) {
    return (
        <div className="sidebar">
            <div className="menu">
                {renderMenu()}
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