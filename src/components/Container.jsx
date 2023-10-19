import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import continentsData from "../bd/gc.json"
import {useState} from "react";

function Container() {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedCities, setSelectedCities] = useState(null);

    //console.log(Object.keys(continentsData["Europe"].countries))

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

    function renderColumnLeft() {
        return <div className="column_left">
            {renderColumnCountries()}
        </div>
    }


    function renderColumnCountries() {
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
        let pathToImage = "../images/continents/"
        if (selectedContinent !== null) {
            let str = selectedContinent;
            if (str.includes(" ")) {
                str = str.replace(/ /g, "_");
            }
            pathToImage = pathToImage + str + ".png"
            return <div>
                <img src={pathToImage}/>
            </div>
        }

    }

    function handleCountrie(value) {
        setSelectedCountries(value);
    }

    function handleContinent(value) {
        setSelectedContinent(value);
        setSelectedCountries(Object.keys(continentsData[value].countries))
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
                handleCountrie={handleCountrie}
                renderColumnLeft={renderColumnLeft}
            />
        </main>
        <Footer/>
    </>
}

export default Container;