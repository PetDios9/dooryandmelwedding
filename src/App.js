import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './styles/theme';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
