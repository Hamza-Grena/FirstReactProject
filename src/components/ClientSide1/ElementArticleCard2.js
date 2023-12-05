import { useShoppingCart} from 'use-shopping-cart';

const ElementsArticleCard= (props)=> {
  const { addItem } = useShoppingCart();
  
  const style ={
    padding: '8px 16px', 
    backgroundColor: 'green', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer' 
  
}
  const addToCart = (product) => {
      
    const target = { 
    id : product.id,
    title : product.name,
    image : product.image,
    price : product.price,
    qtestock : product.qtestock,
    quantity : 1
    };

    addItem(target);
    console.log('Item added to cart:', target);

  
  }; 
    return ( 
     <>

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
  className variant="secondary"
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

export default ElementsArticleCard;
