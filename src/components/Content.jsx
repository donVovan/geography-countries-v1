
function Content({ selectedContinent, renderColumnCountries}) {
    //console.log(selectedContinent)
    //console.log(continentsData)


    return (
        <div className="content">
            <h1>{selectedContinent === null ? "выбери континент" : selectedContinent}</h1>
            <div className="content_container">
                <div className="column_left">
                    Здесь картинки
                </div>
                <div className="column_right">
                    {renderColumnCountries()}
                </div>
            </div>
        </div>
    )
}

export default Content;