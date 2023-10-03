import './App.css'

function App() {

    return (
        <div className="null">
            <div className="wrapper">
                <header className="header">
                    <div className="site_title">
                        <a href={"/"}>
                            <img src="../public/images/title.png" alt="Logo"/><span>now I know more</span>
                        </a>
                    </div>
                </header>
                <main className="main">
                    <div className="sidebar">
                        <div className="menu">
                            <ul>
                                <li><a href={"/"}>Европа</a></li>
                                <li><a href={"/"}>Азия</a></li>
                                <li><a href={"/"}>Северная Америка</a></li>
                                <li><a href={"/"}>Южная Америка</a></li>
                                <li><a href={"/"}>Африка</a></li>
                                <li><a href={"/"}>Австралия и Океания</a></li>
                            </ul>
                        </div>
                        <div className="sidebar_box">
                            <h3>Подзаголовок</h3>
                            <div className="side_box">что-то здесь</div>
                            <div className="side_box">и здесь...</div>
                        </div>
                    </div>
                    <div className="content">
                        <h1>самый главный заголовок</h1>
                        <p>какой-то текст</p>
                    </div>
                </main>
                <footer className="footer">
                    <p><a href={"/"}>какая-то ссылка</a></p>
                </footer>


            </div>
        </div>
    )
}

export default App
