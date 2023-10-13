import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import continentsData from "../bd/continents.json"
import {useState} from "react";

function Container() {
    const [selectedContinent, setSelectedContinent] = useState(null);

    function handleCountrie(value) {
        setSelectedContinent(value);
    }

    function renderMenu() {
        return <ul>
            {Object.keys(continentsData).map((continent) => (
                <li key={continent} onClick={() => handleCountrie(continent)}>
                    {continent}
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
            <Content/>
        </main>
        <Footer/>
    </>
}

export default Container;