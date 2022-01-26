import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
