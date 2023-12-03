import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ListeArticles from './components/ListeArticles';
import Formulaire from './components/Form';
import Formulaire2 from './components/Form2';
import Feed from './components/Feedback';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ListAc from './components/List';
import EditArticle from './components/editArticle';
import Phead from './partHead';
import ListCard from './components/ClientSide1/ListCard';
import { CartProvider } from "use-shopping-cart";
import Cart from './components/ClientSide1/Cart.js';
import PdfCart from "./components/ClientSide1/PdfCart.js";
import Loginclient from "./components/authentificationClient/loginClient.js";
import ListFeed from './components/ListFeed.js';
import Signup from './components/authentificationClient/Signup.js';
import Home from './components/HomePage.js';
import EditAcc from './components/EditAcc.js';

function App() {
  return (
    <CartProvider>
    <div>
      <Router>
        <Phead/>
        <Routes>
              <Route path='/singup' element={<Signup/>}/>
              <Route path="/" exact element={<Loginclient/>}/>
              <Route path='/articles' element={<ListeArticles/>}/>
              <Route path='/form' element={<Formulaire />}/>
              <Route path='/accessoire' element={<ListAc/>}/>
              <Route path='/formAcc' element={<Formulaire2/>}/>
              <Route path='/Feedback' element={<Feed/>}/>
              <Route path='/Inspect' element={<ListFeed/>}/>
              <Route path='/editArticle/:id' element={<EditArticle/>}/>
              <Route path='/EditAcc/:id' element={<EditAcc/>}/>
              <Route path='/x' element={<ListCard/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/pdfCart' element={<PdfCart/>}/>
              <Route path='/Home' element={<Home/>}/>      
        </Routes>
      
  </Router>

     
       
    </div>
    </CartProvider>
  );
}

export default App;



