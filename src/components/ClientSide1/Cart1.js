import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Plus from '@mui/icons-material/AddAlarm';
import Minus from '@mui/icons-material/RemoveCircle';
import Delete from '@mui/icons-material/Delete';
import StripeCheckout from 'react-stripe-checkout';
const Cart1 = () => {
  const { cartDetails, removeItem , clearCart, totalPrice, cartCount,incrementItem,decrementItem } = useShoppingCart();
  const navigate = useNavigate();

  const commander = async () => {
    setpayment(true);
    
  };
  const [payment,setpayment]=React.useState(false);

  const more = () => {
    navigate('/x');
  };
  const onToken = (token) => {
    // pour finaliser la transaction vous pouvez aussi envoyer le token au backend
    console.log(token);
    //vider le cart
    clearCart();
    //naviguer vers la page d'accueil
    navigate('/');
  };
  

  const clear = () => {
    clearCart();
  };

  const imprimer = () => {
    navigate('/pdfCart');
   };


  if (cartCount === 0) 
    return <h1>Cart Empty</h1>;

  return (
    <div>
      {payment ? <StripeCheckout token={onToken} stripeKey='pk_test_51OEpnBGheYcThEw9N8nnodfRRQQVGDqukObspUI5QyfaL5SJxIbZqdgViKwfKAfr3oIivzwBNLTgZ3J6c4ay47Ab00Wn1gJQLX' amount={totalPrice*100} currency='USD'/>:null}
      <Grid container spacing={2} columns={15} marginTop={10} marginLeft={10}>
        <Grid item xs={8}>
          {cartDetails && Object.values(cartDetails).map((item) => { 
            return (
              <Grid item xs={8} key={item.id} style={{width: "100%",
              margin: "20px"}}>
                <img
                  alt={item.name}
                  style={{ margin: "0 auto", maxHeight: "100px" }}
                  src={item.image} 
                  className="img-fluid d-block"
                />
                <h5>{item.name}</h5>
                <p>Prix: {item.price} TND</p>
                <p>Qté: {item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity < item.qtestock) {
                      incrementItem(item.id);
                    } else {
                      alert("Quantité stock indisponible");
                    }
                  }}
                >
                  <Plus color="success" />
                  </button>
                {item.quantity > 1 && (
                  <button
                  onClick={() => decrementItem(item.id)}
                  >
                    <Minus color="warning" />
                  </button>
                )}
                {item.quantity === 1 && (
                  <button onClick={() => removeItem(item.id)}>
                    <Delete color="error" />
                  </button>
           ) }
                <hr />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={5}>
          <Button color="error" variant="outlined" onClick={more}>
            Ajouter des articles
          </Button>
          <p>Total Articles</p>
          <h4>{cartCount}</h4>
          <p>Total Payement</p>
          <h3>{totalPrice} TND</h3>
          <hr />
          <div>
          <Button color="secondary" variant="outlined" onClick={imprimer}>
              Imprimer PDF
           </Button>
            <Button color="warning" variant="outlined" onClick={commander}>
              Commander
            </Button>
            <Button color="info" variant="outlined" onClick={clear}>
              Annuler
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart1;