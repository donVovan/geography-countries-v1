import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import continentsData from "../bd/gc.json"
import {useState} from "react";

function Container() {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedCountrie, setSelectedCountrie] = useState(null);
    const [selectedCities, setSelectedCities] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [cityId, setCityId] = useState(0);
    const [population, setPopulation] = useState('')
    const [area, setArea] = useState('')
    const [foundation, setFoundation] = useState('')
    const [shortInfo, setShortInfo] = useState('')


    function renderMenu() {
        return <ul>
            {Object.keys(continentsData).map((continent) => (
                <li key={continent}>
                    <a onClick={() => handleContinent(continent)}>
                        {continent}
                    </a>
                </li>
            ))}
        </ul>
    }

    function renderTitle() {
        if (selectedContinent !== null && selectedCountrie !== null) {
            return <h1>{selectedCountrie}</h1>
        } else if (selectedContinent !== null) {
            return <h1>{selectedContinent}</h1>
        } else {
            return <h1>Привет</h1>
        }

    }

    function renderColumnLeft() {
        return <div className="column_left">
            {renderColumnCountries()}
        </div>
    }


    function renderColumnCountries() {
        if (selectedContinent !== null && selectedCities !== null && selectedCity !== null) {
            return <div  key={cityId}>
                <h3>{selectedCity}</h3>
                <ul>
                    <li>
                        Population: {population} people
                    </li>
                    <li>
                        Area: {area} km<sup>2</sup>
                    </li>
                    <li>
                        Year of foundation: {foundation}
                    </li>
                    <li>
                        {shortInfo}
                    </li>
                </ul>
            </div>
        }
        if (selectedContinent !== null && selectedCities !== null) {
            return <ul>
                {selectedCities.map((city) => (
                    <li key={city}>
                        <a onClick={() => handleCity(city)}>
                            {city}
                        </a>
                    </li>
                ))}
            </ul>
        }
        if (selectedContinent !== null) {
            return <ul>
                {selectedCountries.map((country) => (
                    <li key={country}>
                        <a onClick={() => handleCountrie(country)}>
                            {country}
                        </a>
                    </li>
                ))}
            </ul>
        }

    }

    function renderColumnImage() {
        if (selectedContinent !== null && selectedCountrie !== null) {
            let pathToImage = "../images/countries/";
            let str = selectedCountrie;
            if (str.includes(" ")) {
                str = str.replace(/ /g, "_");
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
                str = str.replace(/ /g, "_");
            }
            pathToImage = pathToImage + str + ".png"
            return <div>
                <img alt="глобус" src={pathToImage}/>
            </div>
        }

    }

    function handleCity(value) {
        setSelectedCity(value);
        setCityId((continentsData[selectedContinent].countries[selectedCountrie].cities[value].id))
        setPopulation((continentsData[selectedContinent].countries[selectedCountrie].cities[value].population))
        setArea((continentsData[selectedContinent].countries[selectedCountrie].cities[value].area))
        setFoundation((continentsData[selectedContinent].countries[selectedCountrie].cities[value].foundation))
        setShortInfo((continentsData[selectedContinent].countries[selectedCountrie].cities[value].shortInfo))
        //console.log((continentsData[selectedContinent].countries[selectedCountrie].cities[value].id))
    }

    function handleCountrie(value) {
        //console.log(selectedContinent)
        //console.log(value)
        //console.log(selectedCountries)
        //setSelectedCountries(value);
        setSelectedCountrie(value);
        //setSelectedCities(Object.keys(continentsData[selectedContinent].countries[value].cities))
        //console.log(Object.keys(continentsData[selectedContinent].countries[value].cities))
        setSelectedCities(Object.keys(continentsData[selectedContinent].countries[value].cities))
    }

    //console.log(selectedCountries)
    //console.log(Object.keys(continentsData[selectedContinent].countries["Austria"].cities))
    //console.log(Object.keys(continentsData[selectedContinent]))

    // function handleCity(value) {
    //     setSelectedCities(value);
    // }

    function handleContinent(value) {
        setSelectedContinent(value);
        setSelectedCountries(Object.keys(continentsData[value].countries))
        setSelectedCities(null);
        setSelectedCountrie(null);
        setSelectedCity(null);
    }

    return <>
        <Header/>
        <main className="main">
            <Sidebar
                renderMenu={renderMenu}
            />
            <Content
                continentsData={continentsData}
                selectedContinent={selectedContinent}
                renderColumnImage={renderColumnImage}
                //handleCountrie={handleCountrie}
                renderColumnLeft={renderColumnLeft}
                renderTitle={renderTitle}
            />
        </main>
        <Footer/>
    </>
}

export default Container;