import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
          <Route path="/" exact component={NotesListPage} />
          <Route path="/note/:id" component={NotePage} />
      </div>
    </Router>
  )
}

export default App
