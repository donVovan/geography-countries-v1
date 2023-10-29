import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import {useEffect, useState} from "react";

function Container() {

    const [selectedContinents, setSelectedContinents] = useState(null);
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCities, setSelectedCities] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [cityId, setCityId] = useState(0);
    const [population, setPopulation] = useState('')
    const [area, setArea] = useState('')
    const [foundation, setFoundation] = useState('')
    const [shortInfo, setShortInfo] = useState('')
    const [jsonData, setJsonData] = useState('')

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch('http://localhost:3002/test/');
        const data = await response.json();
        setJsonData(data);
    }

    useEffect(() => {
        setContinents()
    }, [jsonData]);

    function setContinents() {
        if (jsonData) {
            setSelectedContinents(Object.keys(jsonData[0].continents))
        }
    }

    function renderSidebarInfo() {
        if (selectedContinent !== null) {
            return <div className="sidebar_box">
                <div className="side_box">Population: {population} people</div>
                <div className="side_box">Area: {area}</div>
            </div>
        }
    }


    function renderMenu() {
        if (selectedContinents !== null) {
            return <ul>
                {selectedContinents.map((continent) => (
                    <li key={continent}>
                        <a onClick={() => handleContinent(continent)}>
                            {continent}
                        </a>
                    </li>
                ))}
            </ul>
        }

    }

    function renderTitle() {
        if (selectedContinent !== null && selectedCountry !== null) {
            return <h1>{selectedCountry}</h1>
        } else if (selectedContinent !== null) {
            return <h1>{selectedContinent}</h1>
        }
    }

    function renderColumnLeft() {
        return <div className="column_left">
            {renderColumnCountries()}
        </div>
    }


    function renderColumnCountries() {
        if (selectedContinent !== null && selectedCities !== null && selectedCity !== null) {
            return <div key={cityId}>
                <h3>{selectedCity}</h3>
                <h5>
                    Year of foundation: {foundation}
                </h5>
                <p>
                    {shortInfo}
                </p>
                <div  className="aBack">
                    <a onClick={handleBackCity}>Назад</a>
                </div>
            </div>

        }
        if (selectedContinent !== null && selectedCities !== null) {
            return <>
                <ul>
                    {selectedCities.map((city) => (
                        <li key={city}>
                            <a onClick={() => handleCity(city)}>
                                {city}
                            </a>
                        </li>
                    ))}
                </ul>
                <div  className="aBack">
                    <a onClick={handleBackCountry}>Назад</a>
                </div>
            </>
        }
        if (selectedContinent !== null) {
            return <ul>
                {selectedCountries.map((country) => (
                    <li key={country}>
                        <a onClick={() => handleCountry(country)}>
                            {country}
                        </a>
                    </li>
                ))}
            </ul>
        }

    }

    function renderColumnImage() {
        if (selectedContinent !== null && selectedCountry !== null && selectedCity !== null) {
            let pathToImage = "../images/cities/";
            let str = selectedCity;
            if (str.includes(" ")) {
                str = str.replace(/\s/g, "_");
            }
            pathToImage = pathToImage + str + ".png"
            return <div>
                <img alt="photo" src={pathToImage}/>
            </div>
        }
        if (selectedContinent !== null && selectedCountry !== null) {
            let pathToImage = "../images/countries/";
            let str = selectedCountry;
            if (str.includes(" ")) {
                str = str.replace(/\s/g, "_");
            }
            pathToImage = pathToImage + str + ".png"
            return <div>
                <img alt="флаг" src={pathToImage}/>
            </div>
        }
        if (selectedContinent !== null) {
            let pathToImage = "../images/continents/";
            let str = selectedContinent;
            if (str.includes(" ")) {
                str = str.replace(/\s/g, "_");
            }
            pathToImage = pathToImage + str + ".png"
            return <div>
                <img alt="глобус" src={pathToImage}/>
            </div>
        }

    }

    function handleBackCity() {
        setSelectedCity(null);
        setSelectedCities(Object.keys(jsonData[0].continents[selectedContinent].countries[selectedCountry].cities));
        setPopulation('');
        setArea('');
        setFoundation('');
        setShortInfo('');
    }

    function handleBackCountry() {
        setSelectedCities(null);
        setSelectedCountry(null);
        setSelectedCity(null);
    }

    function handleCity(value) {
        if (selectedCountry !== null) {
            setSelectedCity(value);
            setCityId((jsonData[0].continents[selectedContinent].countries[selectedCountry].cities[value].id))
            setPopulation((jsonData[0].continents[selectedContinent].countries[selectedCountry].cities[value].population))
            setArea((jsonData[0].continents[selectedContinent].countries[selectedCountry].cities[value].area))
            setFoundation((jsonData[0].continents[selectedContinent].countries[selectedCountry].cities[value].foundation))
            setShortInfo((jsonData[0].continents[selectedContinent].countries[selectedCountry].cities[value].shortInfo))
        }
    }

    function handleCountry(value) {
        if (selectedContinent !== null) {
            setSelectedCountry(value);
            setSelectedCities(Object.keys(jsonData[0].continents[selectedContinent].countries[value].cities))
            setPopulation(jsonData[0].continents[selectedContinent].countries[value].population)
            setArea(jsonData[0].continents[selectedContinent].countries[value].area)
        }

    }

    function handleContinent(value) {
        if (selectedContinents !== null) {
            setSelectedContinent(value);
            setSelectedCountries(Object.keys(jsonData[0].continents[value].countries))
            setPopulation(jsonData[0].continents[value].population)
            setArea(jsonData[0].continents[value].area)
            setSelectedCities(null);
            setSelectedCountry(null);
            setSelectedCity(null);
        }
    }

    return <>
        <Header/>
        <main className="main">
            <Sidebar
                renderMenu={renderMenu}
                renderSidebarInfo={renderSidebarInfo}
            />
            <Content
                renderColumnImage={renderColumnImage}
                renderColumnLeft={renderColumnLeft}
                renderTitle={renderTitle}
            />
        </main>
        <Footer/>
    </>
}

export default Container;