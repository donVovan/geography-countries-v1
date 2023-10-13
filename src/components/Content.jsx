function Content({continentsData, selectedContinent}) {
    let selectedContinentData = null;
    let countries = null;

    if (selectedContinent !== null) {
        selectedContinentData = continentsData[selectedContinent];
    }
    console.log(selectedContinentData)
    return (
        <div className="content">
            <h1>{selectedContinent}</h1>
            <div className="content_container">
                <div className="column_left">
                    {countries &&
                    Object.keys(countries).map((country) => (
                        <li key={countries[country].id}>
                            {country}
                        </li>
                    ))
                    }
                </div>
                <div className="column_right">Колонка справа</div>
            </div>
        </div>
    )
}

export default Content;