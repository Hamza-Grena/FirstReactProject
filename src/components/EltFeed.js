import Table from 'react-bootstrap/Table';
function EltFeed(props) {
    return ( 
        <>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Opinion</th>
        </tr>
      </thead>
    <tbody>
      {props.Feed && props.Feed.map((elt) => (
        <tr key={elt.id}>
            <td>{elt.id}</td>
            <td>{elt.name}</td>
            <td>{elt.Lastname}</td>
            <td>{elt.Email}</td>
            <td>{elt.opinion}</td>
        </tr>
          ))}
    </tbody>
</Table>
        </>
     );
}

export default EltFeed;