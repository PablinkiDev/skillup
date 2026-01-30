import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { JobsPage } from "./pages/JobsPage/JobsPage.jsx";
import { TestPage } from "./pages/TestPage/TestPage.jsx";
import { Route } from "./components/Route.jsx";

function App() {

  return (
    <div className="app-layout">
      <Header />
      <div className="app-content">
        <Route path='/' component={HomePage} />
        <Route path='/empleos' component={JobsPage} />
        <Route path='/test' component={TestPage}/>
      </div>
      <Footer />
    </div>
  )
}

export default App;
