import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { HomeContent } from "../api/Content";


const Content = (
    props: {
        joinUs: () => void;
        content: HomeContent;
    }
) => {
    return (
        <div className="pt-[50px]">
        <Container>
        <Row>
        <Col sm={4} className="pt-[100px]">
            <h1>{props.content.title}</h1>
            <br/>
            <h5>
                {props.content.mission}
            </h5>
            <h5 className="font-normal">
                {props.content.description}
            </h5>
            <br/>
            <Button size="lg" onClick={props.joinUs}>Join Us</Button>
        </Col>
        <Col sm={8}>
            <Image src={props.content.imageUrl} fluid/>
        </Col>
        </Row>
        </Container>
        </div>

    )
}

export default Content;