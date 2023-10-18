import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import continentsData from "../bd/continents.json"
import {useState} from "react";

function Container() {
    const [selectedContinent, setSelectedContinent] = useState(null);

    // const eur = ["Austria", "Belarus"]

    function handleContinent(value) {
        setSelectedContinent(value);
        // console.log(selectedContinent)
        console.log(continentsData[selectedContinent].countries)
    }

    function renderColumnCountries() {
        if (selectedContinent === null) {
            return <p>Здесь будет список стран континента</p>
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

    //console.log(continentsData.Europe.id)

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