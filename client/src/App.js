import "./App.css";
import Footer from "./components/Footer/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
