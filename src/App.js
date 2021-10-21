import logo from './img/logo.png';
import TopBar from './components/TopBar.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

///////////////////////////////////////////////

const App = () => {
  return (
    <div className="App">
      <TopBar />

      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
