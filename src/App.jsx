import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Error404Page } from "./pages/Error404Page/Error404Page.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { JobsPage } from "./pages/JobsPage/JobsPage.jsx";

function App() {

  let render = <Error404Page />

  if (window.location.pathname === '/') {
    render = <HomePage />
  } else if (window.location.pathname === '/empleos') {
    render = <JobsPage />
  } 

  return (
    <div className="app-layout">
      <Header />
      <div className="app-content">
        {render}  
      </div>
      <Footer />
    </div>
  )
}

export default App;
