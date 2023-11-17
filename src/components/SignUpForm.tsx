import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpForm = ( 
    props: {
        onHide: () => void;
    }
) => {
  return (
    <div className="bg-slate-200 rounded-xl">
        <div className="p-2 flex justify-end">
            <Button variant="danger" onClick={props.onHide}>Close</Button>
        </div>
        <Form className="w-full justify-center py-2 px-2">
        <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control size="lg" type="name" placeholder="Enter name" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control size="lg" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <br />
        <Form.Group controlId="formOccupation">
            <Form.Label>Occupation</Form.Label>
                <Form.Control size="lg" as="select">
                    <option>Medical Professional</option>
                    <option>Investor</option>
                    <option>Other</option>
                </Form.Control>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>

  );
};

export default SignUpForm;
