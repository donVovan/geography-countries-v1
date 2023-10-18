import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import continentsData from "../bd/gc.json"
import {useState} from "react";

function Container() {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState([]);

    //console.log(Object.keys(continentsData["Europe"].countries))

    function handleContinent(value) {
        setSelectedContinent(value);
        setSelectedCountries(Object.keys(continentsData[value].countries))
    }

    function renderColumnCountries() {
        if (selectedContinent === null) {
            return <p>Здесь будет список стран континента</p>
        } else {
           return <ul>
                {selectedCountries.map((country) => (
                    <li key={country}>
                        {country}
                    </li>
                ))}
            </ul>
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


    return <>
        <Header/>
        <main className="main">
            <Sidebar
                renderMenu={renderMenu}
            />
            <Content
                continentsData={continentsData}
                selectedContinent={selectedContinent}
                renderColumnCountries={renderColumnCountries}
            />
        </main>
        <Footer/>
    </>
}

export default Container;