import axios from 'axios';
import ElementAc from './ElementAc';
import { useEffect } from 'react';
import { useState } from 'react';
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
function ListAc(){
    const [Accessoire,SetAc]=useState("");
    useEffect(() => {
        axios.get("http://localhost:5000/catalog2")
        .then((response) => {
            SetAc(response.data);
            console.log(response.data);
           })
         .catch((error)=>console.error())   
    }, []);
    if(Accessoire ==="")
    {
        return <Load/>
    }
    else
    {
    return (
        <div style={div_style}>
            <h2 style={format}>Liste des Accessoires</h2>
            <ElementAc Accessoire={Accessoire}/>
        </div>
        
     );
}
}

export default ListAc;