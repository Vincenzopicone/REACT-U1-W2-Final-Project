
import Form from 'react-bootstrap/Form';


function Search() {
  return (
    <>
    <Form className='d-flex'>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Inserisci la città" />
      </Form.Group>
    </Form>
    </>
  );
}

export default Search;