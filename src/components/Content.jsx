// eslint-disable-next-line react/prop-types
function Content({renderColumnImage, renderColumnLeft, renderTitle}) {


    return (
        <div className="content">
            <h1>{renderTitle()}</h1>
            <div className="content_container">
                {renderColumnLeft()}
                <div className="column_right">
                    {renderColumnImage()}
                </div>
            </div>
        </div>
    )
}

export default Content;