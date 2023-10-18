function Content({selectedContinent, renderColumnCountries, renderColumnImage}) {
    //console.log(selectedContinent)
    //console.log(continentsData)
    // <img src="../../public/images/continents/Europe.png"/>


    return (
        <div className="content">
            <h1>{selectedContinent === null ? "выбери континент" : selectedContinent}</h1>
            <div className="content_container">
                <div className="column_left">
                    {renderColumnCountries()}
                </div>
                <div className="column_right">
                    {renderColumnImage()}
                </div>
            </div>
        </div>
    )
}

export default Content;