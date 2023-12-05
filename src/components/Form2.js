
import {useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const format={
    fontSize: "3em",
    fontWeight: "normal",
    fontStyle: "italic",
    fontFamily: '"Playfair Display", "Bookman", serif',
    color: "#999",
    letterSpacing: "-0.005em",
    wordSpacing: "1px"
}
function Formulaire2()
{
    const navigate=useNavigate(); 
     const[name,setname]=useState("");
     const[description,setDesignation]=useState("");
     const[image,setimage]=useState("");
    const [price,setPrice]=useState("");
    const [qtestock,setqte]=useState(0);
    const handelsumbit=(event)=>{
        event.preventDefault();
        const catalog2={
        name,
        description,
        image,
        price,
        qtestock
        
        };
        
        axios.post("http://localhost:5000/catalog2",catalog2)
        .then((response) => {
          
            console.log(response.data);
           })
         .catch((error)=>console.error())  
           alert("Accessoire Added with Success !");
           navigate("/accessoire");
        }
    
    

    return (
        <div>
        <h1 style={format}>Add A New Accessoire</h1>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Name :</label>
                <input type="text" class="form-control"  placeholder="Enter reference" value={name} onChange={(event)=>setname(event.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">designation :</label>
                <input type="text" className="form-control" placeholder="Enter description" value={description} onChange={(event)=>setDesignation(event.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">image :</label>
                <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter the path of an image" value={image} onChange={(event)=>setimage(event.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Prix :</label>
                <input type="text" className="form-control" placeholder="Enter the price" value={price} onChange={(event)=>setPrice(event.target.value)}/>
            </div>
            <div className="form-group">
                    <label for="exampleInputPassword1">Quantité :</label>
                    <input type="text" className="form-control" placeholder="Enter the price" value={qtestock} onChange={(event)=>setqte(parseInt(event.target.value))}/>
            </div>
         
         <button type="submit" className="btn btn-primary" onClick={(event)=>handelsumbit(event)}>Add !</button>
        </form>
    </div>
    )

}
export default Formulaire2;
