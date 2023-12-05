import Spinner from 'react-bootstrap/Spinner';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function Load() {
  return (
    <div style={style}>
      <Spinner animation="border" role="status" style={{ height: '100px', width: '100px' }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Load;
