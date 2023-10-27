import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import continentsData from "../bd/gc.json"
import {useEffect, useState} from "react";

function Container() {

    /*fetch('http://localhost:3002/test/').then(
        response => {
            return response.text();
        }
    ).then(
        text => {
            console.log(text); // текст страницы

        }
    );*/

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
        try {
            const response = await fetch('http://localhost:3002/test/');
            const data = await response.json();
            setJsonData(data);
        } catch (error) {
            console.error(error);
        }
    }



    function renderSidebarInfo() {
        if (selectedContinent !== null) {
            return <div className="sidebar_box">
                <div className="side_box">Population: {population} people</div>
                <div className="side_box">Area: {area}</div>
            </div>
        } else {
            return <div className="sidebar_box">
                <div className="side_box">что-то здесь</div>
                <div className="side_box">и здесь...</div>
            </div>
        }
    }

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
        if (selectedContinent !== null && selectedCountry !== null) {
            return <h1>{selectedCountry}</h1>
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
            return <div key={cityId}>
                <h3>{selectedCity}</h3>
                <h5>
                    Year of foundation: {foundation}
                </h5>
                <p>
                    {shortInfo}
                </p>
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
        if (selectedContinent !== null && selectedCountry !== null && selectedCity !==null) {
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

    function handleCity(value) {
        setSelectedCity(value);
        setCityId((continentsData[selectedContinent].countries[selectedCountry].cities[value].id))
        setPopulation((continentsData[selectedContinent].countries[selectedCountry].cities[value].population))
        setArea((continentsData[selectedContinent].countries[selectedCountry].cities[value].area))
        setFoundation((continentsData[selectedContinent].countries[selectedCountry].cities[value].foundation))
        setShortInfo((continentsData[selectedContinent].countries[selectedCountry].cities[value].shortInfo))
        //console.log((continentsData[selectedContinent].countries[selectedCountrie].cities[value].id))
    }

    function handleCountrie(value) {
        //console.log(selectedContinent)
        //console.log(value)
        //console.log(selectedCountries)
        //setSelectedCountries(value);
        setSelectedCountry(value);
        //setSelectedCities(Object.keys(continentsData[selectedContinent].countries[value].cities))
        //console.log(Object.keys(continentsData[selectedContinent].countries[value].cities))
        setSelectedCities(Object.keys(continentsData[selectedContinent].countries[value].cities))
        setPopulation(continentsData[selectedContinent].population)
        setPopulation(continentsData[selectedContinent].area)
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
        setPopulation(continentsData[value].population)
        setArea(continentsData[value].area)
        setSelectedCities(null);
        setSelectedCountry(null);
        setSelectedCity(null);
        //console.log(continentsData[value].population)
        //console.log(Object.keys(jsonData[value]))
        console.log(jsonData)
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