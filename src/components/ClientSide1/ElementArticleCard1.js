import { Link}  from 'react-router-dom';
import { useShoppingCart} from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const style ={
    padding: '8px 16px', 
    backgroundColor: 'green', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer' 
  
}
const ElementsArticleCard1= (props)=> {
  const { cartCount,addItem } = useShoppingCart();
  const addToCart = (product) => {
      
    const target = { 
    id : product.id,
    title : product.name,
    image : product.image,
    price : product.price,
    qtestock : product.qtestock -1,
    quantity : 1
    };
    addItem(target);
    console.log('Item added to cart:', target);
   
  };


 
    return ( 
     <>
     <AppBar position="static" color='default' style={{height:"1.5cm", width:"3cm",marginLeft:"-1.5cm"}}>
            <Toolbar >
                <Button color="inherit" style={{height:"1cm"}} ><Link to="/cart">{ cartCount}<ShoppingCartIcon fontSize="large" /></Link></Button>
             </Toolbar>
     </AppBar>


<div className="row">
       {props.articles && props.articles.map((product) => (
         
         <article className="col-sm-3" key={product.id}>
<div className="card">
<img src={product.image} className="card-img-top p-5" alt={product.description} style={{height:"5cm" , width:"5cm"}} />
</div>
<div className="text-center">
<div>{product.description.substr(0,20)} ... </div>
<div>Prix : {product.price} TND </div>
</div>
<div className="text-center">
<button style={style}
  disabled={product.qtestock <= 1}
  
  onClick={() => addToCart(product)}>
  Add to Cart
</button>
</div>
</article>
        
       ))}
     </div>
     </>

  );
}

export default ElementsArticleCard1 ; 