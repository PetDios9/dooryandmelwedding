import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './styles/theme';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';
// import Schedule from './pages/Schedule';
import Registry from './pages/Registry';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/schedule" element={<Schedule />} /> */}
            <Route exact path="/registry" element={<Registry />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
