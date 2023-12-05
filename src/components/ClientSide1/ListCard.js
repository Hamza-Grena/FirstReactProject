import { useEffect, useState } from "react";
import ElementsArticleCard1 from "./ElementArticleCard1";
import ElementsArticleCard2 from "./ElementArticleCard2";
import axios from "axios";
import Footer from "../Footer";
import Load from "../Spinner";

function ListCardArticle () {
    const [articles,setarticles]=useState([]);
    const [articles2,setarticles2]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/catalog1")
        .then((response) => {
            setarticles(response.data);
            console.log(response.data);
           })
         .catch((error)=>console.error())  
         axios.get("http://localhost:5000/catalog2")
         .then((response) => {
          //  setarticles([...articles,response.data]);
          setarticles2(response.data);
             console.log(response.data);
            })
          .catch((error)=>console.error())   
    }, []);
    if(articles.length === 0 || articles2.length === 0 )
    {
        return <Load/>
    }
    else
    {

    
    return (
        <>
          
        <div  className="container">
            <ElementsArticleCard1 articles={articles}/>
            <ElementsArticleCard2 articles={articles2}/>
        </div>
       
        <Footer/>
        </>
        
    )
    ;
}
}

export default ListCardArticle ;