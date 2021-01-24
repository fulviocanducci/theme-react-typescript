import { useEffect } from 'react';
import { useThemeContext } from '../../context/ThemeProvider';
import './index.css';

export default function App() {
  const [theme, toogleTheme] = useThemeContext();
  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = theme.background;
    }
  }, [theme]);
  return (
    <div>
      <div className="App">
        <h1 style={{ color: theme?.color }}>Themas</h1>
        <h2 style={{ color: theme?.color }}>
          Mudando a cor do layout While e Black
        </h2>
      </div>
      <button onClick={toogleTheme}>Mudar a cor</button>
    </div>
  );
}
