import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function ElementAc(props) {
    const cardStyle = {
        width: "100%",
        margin: "20px",
        ':hover': {
            width: '220px', 
            height: '120px', 
          }
    };

      
   const navigate=useNavigate();
    const[articles,setarticles]=useState('');
    const handleDeleteProduct = async (productId)=>{
        fetch(`http://localhost:5000/catalog2/${productId}`,{
            method:"DELETE",
        })
        .then((response)=>{
            if(response.status===20){
                const update=articles.filter((articles)=>articles.id!==productId);
                setarticles(update);
                navigate("/accessoire");
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
            {props.Accessoire && props.Accessoire.map((elt) =>
                <div key={elt.id} className='col-md-4' >
                    <div className="card"style={cardStyle} >
                        <img className="card-img-top" src={elt.image} style={{ width: "3cm", height:"3cm" }}alt="Card capt" />
                        <div className="card-body">
                            <h5 className="card-title">Nom: {elt.name}</h5>
                            <p className="card-text">Description: {elt.description}</p>
                            <p className='card-text'>Prix: {elt.price}</p>
                            <i className="bi bi-bucket"></i>
                            <Link exact to={`/EditAcc/${elt.id}`} className="btn btn-primary">Modifier</Link>
                            <Button onClick={()=>handleDeleteProduct(elt.id)} variant="info" style={{ marginLeft: "12px", backgroundColor:'red'}}>Supprimer</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    
        );
}

export default ElementAc;