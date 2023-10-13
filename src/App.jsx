import './App.css'
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <div className="null">
            <div className="wrapper">
                <Header />
                <main className="main">
                    <Sidebar />
                    <Content />
                </main>
                <Footer />


            </div>
        </div>
    )
}

export default App
