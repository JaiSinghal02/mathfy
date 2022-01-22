import './App.css';
import './assets/fonts/fonts.css'
import Layout from './Containers/Layout/Layout';
import Header from './Components/Header/Header';
import MathBox from './Containers/MathBox/MathBox';
import axios from 'axios';

axios.defaults.baseURL = 'https://mathfy-backend.herokuapp.com'

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <MathBox/>
      </Layout>
    </div>
  );
}

export default App;
