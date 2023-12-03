import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function ElementsArticle(props) {
    const navigate=useNavigate(); 
    const [articles,setarticles]=useState(props.articles);
    const cardStyle = {
        width: "100%",
        margin: "20px", 
    };

    const imageStyle = {
        maxWidth: "70%",
    };
    const handleDeleteProduct = async (productId)=>{
        fetch(`http://localhost:5000/catalog1/${productId}`,{
            method:"DELETE",
        })
        .then((response)=>{
            if(response.status===20){
                const update=articles.filter((articles)=>articles.id!==productId);
                setarticles(update);
                navigate("/articles");
                setTimeout(() => {
                    window.location.reload();
                }, 500); 
            }
        })
        .catch((error)=>{
            console.log("Erreur lors de la suppression de produit",error);
        });
        
    };
    

    return (
        <div className="row" style={{ width: "90%", display: "flex" }}>
            {props.articles && props.articles.map((elt) => (
                <div key={elt.id} className='col-md-4'>
                    <div className="card" style={cardStyle}>
                        <img className="card-img-top" src={elt.image} alt="Card image cap" style={{ width: "3cm", height:"3cm" }}  />
                        <div className="card-body">
                            <h5 className="card-title">Nom: {elt.name}</h5>
                            <p className="card-text">Description: {elt.description}</p>
                            <p className='card-text'>Prix: {elt.price}</p>
                            <i className="bi bi-bucket"></i>
                            <Link exact to={`/editArticle/${elt.id}`} className="btn btn-primary">Modifier</Link>
                            <Button onClick={()=>handleDeleteProduct(elt.id)} variant="info" style={{ marginLeft: "12px", backgroundColor:'red'}}>Supprimer</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ElementsArticle;
