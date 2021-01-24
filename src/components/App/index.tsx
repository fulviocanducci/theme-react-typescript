import { useThemeContext } from "../../context/ThemeProvider";

export default function App() {
  const [theme, toogleTheme, themeDefault] = useThemeContext();
  return (
    <div>
      <h1>{themeDefault}</h1>
      <div className="App" style={{ background: theme.background }}>
        <h1 style={{ color: theme.color }}>Themas</h1>
        <h2 style={{ color: theme.color }}>
          Start editing to see some magic happen!
        </h2>
      </div>
      <button onClick={toogleTheme}>Mudar</button>
    </div>
  );
}
