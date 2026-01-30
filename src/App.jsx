import { useRouter } from "./hooks/useRouter.js";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Error404Page } from "./pages/Error404Page/Error404Page.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { JobsPage } from "./pages/JobsPage/JobsPage.jsx";

function App() {
  const { path } = useRouter()

  return (
    <div className="app-layout">
      <Header />
      <div className="app-content">
        { path === '/' && <HomePage /> }
        { path === '/empleos' && <JobsPage /> }
        { path !== '/' && path !== '/empleos' && <Error404Page />}
      </div>
      <Footer />
    </div>
  )
}

export default App;
