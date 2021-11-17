import GlobalProvider from "./contexts/Provider";
import Rotas from "./routes/Rotas";

function App() {
  return (
    <GlobalProvider>
      <Rotas />
    </GlobalProvider>
  );
}

export default App;
