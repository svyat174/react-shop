import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ContextProvider } from './context';

function App() {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
