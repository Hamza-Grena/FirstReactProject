import axios from 'axios';
import {useEffect, useState} from 'react';
import EltFeed from './EltFeed';
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

function ListFeed() {
    const [feed,setFeed] = useState("");
    useEffect(() => {
        axios.get("http://localhost:5000/feedback")
        .then((response) => {
            setFeed(response.data);
            console.log(response.data);
           })
         .catch((error)=>console.error())   
    }, []);
    return (
        <div style={div_style}>
            <div>
                <h2 style={format}>
                    Liste de Feedback :
                </h2>
            </div>
            <EltFeed Feed={feed}/>
        </div>
    );
}

export default ListFeed;