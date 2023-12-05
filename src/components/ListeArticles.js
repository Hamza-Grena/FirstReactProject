import axios from 'axios';
import {useEffect, useState} from 'react';
import ElementsArticle from './ElementsArticle';
import Load from './Spinner';
const format={
    fontSize: "3em",
    fontWeight: "normal",
    fontStyle: "italic",
    fontFamily: '"Playfair Display", "Bookman", serif',
    color: "#999",
    letterSpacing: "-0.005em",
    wordSpacing: "1px"
}
const div_style={
        padding: '20px', 
        backgroundColor: 'lightgray',
        color: 'black', 
        border: '1px solid black',
        borderRadius: '0px'

}

function ListeArticles() {
    const [pc,setPc] = useState("");
    useEffect(() => {
        axios.get("http://localhost:5000/catalog1")
        .then((response) => {
            setPc(response.data);
            //console.log(response.data);
           })
         .catch((error)=>console.error())   
    },[]);
    if(pc ==="")
    {
        return <Load/>

    }
    else
    {
    return (
        <>
        <div style={div_style}>
            <div >
                <h2 style={format}>
                    Liste des PC :
                </h2>
            </div>
            <ElementsArticle articles={pc}/>
            
        </div>
        </>
        
    );
}
}

export default ListeArticles;