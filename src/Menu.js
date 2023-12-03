import React,{useState} from "react";
import {Link } from "react-router-dom"
import {auth} from "./fireConfig";
import { onAuthStateChanged} from "firebase/auth";

function Menu() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const logOut=()=>{

    auth.signOut().then(() => {
         console.log('singOut');
       }).catch((error) => {
         console.log(error);
       });
    
     }
   
    return ( 
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <a className="navbar-brand"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/articles">Liste des articles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/addArticle">Ajout articles</Link>
        </li>
     </ul>
     {!isLoggedIn
          ? (
            <Link className="btn btn-outline-primary" to="/loginclient">Log In</Link>
                ):(
            <button className="btn btn-outline-primary" onClick={()=>logOut()}>Log Out</button>
            )
      }
    </div>
  </div>
</nav>
     );
}

export default Menu;
