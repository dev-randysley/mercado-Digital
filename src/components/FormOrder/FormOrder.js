
import { Form, Button } from 'react-bootstrap';

export const FormOrder=({sendOrder}) =>{
    return(
        <>
           <Form onSubmit={sendOrder} style={{borderRadius: '5px'}}>
            <fieldset style={{backgroundColor: 'white', borderRadius: '5px', padding:"5px"}}>
                    <Form.Group className="mb-3" >
                        <Form.Label><h4>Ingrese sus datos para terminar la compra</h4></Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder="Phone" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="email@example.com" />
                    </Form.Group>

                    <br/>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </fieldset>
            </Form>
        </>
    )
}