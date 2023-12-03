import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Phead() {
  const setButton = {
    position: 'absolute',
    top: '10px',
    right: '20px',
  };

  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/singup') {
    return null;
  }

  const handleClose = () => {
    navigate('./');
  };

  const isLoggedIn = localStorage.getItem('email') !== 'hamzagr707@gmail.com' && localStorage.getItem('password') !== '101101';

  let pcStoreLink = (
    <Link className="navbar-brand" exact to="/articles">Pc Store</Link>
  );
  let accessoireLink = (
    <Link className="navbar-brand" exact to="/accessoire">Accessoire</Link>
  );
  let addPCLink = (
    <Link className="navbar-brand" exact to="/form">Add Pc</Link>
  );
  let addAccessoireLink = (
    <Link className="navbar-brand" exact to="/formAcc">Add Accessoire</Link>
  );
  let inspectFeedbackLink = (
    <Link className="navbar-brand" exact to="/Inspect">Inspect Feedback</Link>
  );
  let FeedbackLink = (
    <Link className="navbar-brand" exact to="/Feedback">Feedback</Link>
  );
  let ShoopingLink=(
    <Link className="navbar-brand" exact to="/x">Shooping</Link>

  );
  let HomeLink=(
    <Link className="navbar-brand" exact to="/Home">Home</Link>
);

  if (isLoggedIn) {
    pcStoreLink = null;
    accessoireLink = null;
    addPCLink = null;
    addAccessoireLink = null;
    inspectFeedbackLink = null;
    
  }
  
  if(!isLoggedIn)
  {
    FeedbackLink=null;
    ShoopingLink=null;
    HomeLink=null;

  }
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {HomeLink}
            {pcStoreLink}
            {accessoireLink}
            {addPCLink}
            {addAccessoireLink}
            {inspectFeedbackLink}
            {ShoopingLink}
            {FeedbackLink}
              <button type="button" style={setButton} className="btn btn-danger" onClick={handleClose}>
                LogOut
              </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Phead;
