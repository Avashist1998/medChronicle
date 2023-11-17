
import { Row } from "react-bootstrap";

import Home from "../components/Home";
import AboutUs from "../components/AboutUs";

import { HomeContent } from "../api/Content";

const Content = (
    props: {
        joinUs: () => void;
        homeContent: HomeContent;
    }
) => {

return (
    <div className="pt-[50px] pb-[70px]">
        <Row>
        <Home joinUs={props.joinUs} content={props.homeContent}/>
        </Row>
        <Row>
        <div id="about" className="h-[100%]">
            <AboutUs/>
        </div>
        </Row>
        <Row>
        </Row>
    </div>

)

}

export default Content;