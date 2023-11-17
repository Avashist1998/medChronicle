import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { HomeContent } from "../api/Content";


const Home = (
    props: {
        joinUs: () => void;
        content: HomeContent;
    }
) => {
    return (
        <div>
        <Container>
        <Row>
        <Col sm={3} className="pt-[100px]">
            <h1>{props.content.title}</h1>
            <br/>
            <h5>
                {props.content.mission}
            </h5>
            <h6 className="font-normal">
                {props.content.description}
            </h6>
            <br/>
            <Button size="lg" onClick={props.joinUs}>Join Us</Button>
        </Col>
        <Col sm={9}>
            <Image src={props.content.imageUrl} fluid/>
        </Col>
        </Row>
        </Container>
        </div>

    )
}

export default Home;