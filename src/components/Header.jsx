const Header = ({toggleTheme}) => {
    return (
        <div className="app-header">
            <h1>My Todos</h1>
            <button onClick={() => toggleTheme()}>
                <img 
                    className="switch" 
                    src="/moon-regular.svg" 
                    alt="dark-logo"/>
            </button>
        </div>
    )
}

export default Header;