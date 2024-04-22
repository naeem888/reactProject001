import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaCirclePlay } from "react-icons/fa6";
import { Container,Row, Col } from 'react-bootstrap';


function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
    <Container className='playContainer mt-5'>
    <Row>
      <Col lg={12} md={12} sm={12} className='videocard'>
    <h4> How I Do </h4>
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Nostrum ipsum enim atque molestias aut provident suscipit earum voluptates
        est velit quod mollitia odio illum Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Beatae est inventorid expedita. Qui minima voluptas impedit 
        odit, fugiat quod repudiandae nisi autem. At beatae nostrum voluptatem rem ad?
        tempora deleniti, laborum harum ipsam?</p>

      <p onClick={() => setShow(true)} className='text-center'> <FaCirclePlay className='playbutton'/></p>
      </Col>
      </Row>
      </Container>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>

   

    </>
    
  );
  
}

export default Example;