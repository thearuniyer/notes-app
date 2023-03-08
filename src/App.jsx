import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';

function App() {
  const[theme, setTheme] = useState('')
  const toggleTheme = () => {
    if(theme === 'dark') {
      setTheme('light')
    }
    else {
      setTheme('dark')
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  // https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43
  return (
    <Router forceRefresh>
      <div className={`container ${theme}`}>
        <div className="app">
          <Header toggleTheme = {toggleTheme}/>
          <Route path="/" exact component={NotesListPage} />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </Router>
  )
}

export default App
