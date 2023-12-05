import { useState,useEffect  } from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

function EditAcc() {

    const navigate=useNavigate();

    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");
    const [price, setprice] = useState("");
    const [qtestock,setQte]=useState(0);
    
    
    const {id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:5000/catalog2/'+id)
    .then(res => {
                console.log(res.data);
                  setname(res.data.name);
                  setdescription(res.data.description);
                  setimage(res.data.image);
                  setprice(res.data.price);
                  setQte((res.data.qtestock));

      })
    },[id]);

    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProduct = {
        id:id,
        name,
        description,
        image,
        price,
        qtestock

      };
    
   axios.put("http://localhost:5000/catalog2/"+id,newProduct)
  .then(res => {  
  console.log(res);
  navigate("/accessoire")
  alert("Modification bien effectuer !")
    })   
  .catch(error=>{
      console.log(error)
      alert("Erreur ! Modification non effectuée")
      })
  
  }

    return ( 
        <>
        <div className="container">
        <h2 >Modification d'un produit</h2>
        <form onSubmit={handleSubmit}>
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="name"
          type="text"
          value={name}
          onChange={e => setname(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Description"
          name="designation"
          type="text"
          value={description}
          onChange={e => setdescription(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="image"
          type="text"
          value={image}
          onChange={e => setimage(e.target.value)}
          />
     </div>
 <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="price"
          type="text"
          value={price}
          onChange={e => setprice(e.target.value)}
          />
     </div>
 <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="qtestock"
          type="text"
          value={qtestock}
          onChange={e => setQte(parseInt(e.target.value))}
          />
     </div>

    
    <div>{image ?<img src={"/"+image} alt={image} width="70"/>:null}</div> 
     <div>
    <button className="btn btn-success">Valider</button>
    </div>  
    </div>
    </form>
   
  </div>
  </>
     );
}

export default EditAcc;

