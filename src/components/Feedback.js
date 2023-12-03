import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

    
function Feed() {
    const format={
        fontSize: "3em",
        fontWeight: "normal",
        fontStyle: "italic",
        fontFamily: '"Playfair Display", "Bookman", serif',
        color: "#999",
        letterSpacing: "-0.005em",
        wordSpacing: "1px"
}
    const navigate=useNavigate();
    const[name,SetName]=useState("");
    const[Lastname,SetLastName]=useState("");
    const[Email,SetEmail]=useState("");
    const[opinion,SetOpinion]=useState("");
    
    const handelsumbit=(event)=>{
        event.preventDefault();
        const feed={
        name,
        Lastname,
        Email,
        opinion
        
        };
        axios.post("http://localhost:5000/feedback",feed)
        .then((response) => {
          
            console.log(response.data);
           })
         .catch((error)=>console.error())  
           alert("Thank you for your feedback!");
           navigate("/articles");
        }
        
    return (  
        <div>
            <h1 style={format}>Add your Feedback</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" value={name} onChange={(event)=>SetName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control type="text" placeholder="Enter your LastName" value={Lastname} onChange={(event)=>SetLastName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address :</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={Email} onChange={(event)=>SetEmail(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Feedback</Form.Label>
                    <Form.Control as="textarea" rows={3} value={opinion} onChange={(event)=>SetOpinion(event.target.value)}/>
                </Form.Group>
                           
                <button  type="submit" className="btn btn-outline-primary" onClick={(event)=>handelsumbit(event)}>Send !</button>

            </Form>
        </div>
       
    );
}

export default Feed;