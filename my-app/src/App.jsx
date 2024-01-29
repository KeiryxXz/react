import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import "./App.css"

const firstName = "Sir";

function BasicExample() {
  return (
  <div className='main'>
    <h1 className='title'>Product</h1>

    <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Image productImage={product.image}></Image>
      <Card.Body className='card-body'>
        <Name productName={product.name}></Name>
        <Price productPrice={product.price}></Price>
        <Description productDescription={product.description}></Description>
        <Button className='button' variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="message">
        <p className='p'>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </p>
        {firstName && <img className='img' src="/src/assets/react.svg" alt="Votre Image" />}
    </div>
  </div>
  );
}

export default BasicExample;