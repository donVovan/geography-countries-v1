// eslint-disable-next-line react/prop-types
function Sidebar({renderMenu, renderSidebarInfo}) {
    return (
        <div className="sidebar">
            <div className="menu">
                {renderMenu()}
            </div>
            {renderSidebarInfo()}
        </div>
    );
}

export default Sidebar;