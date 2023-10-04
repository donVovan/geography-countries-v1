import './App.css'
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

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
