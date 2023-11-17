
import { Nav, NavDropdown, Navbar, Button } from "react-bootstrap";

const BasicNavBar = (
  props: {
    joinUs: () => void;
  }
) => {
  return (
    <Navbar expand="lg" className="bg-slate-300 shadow-md px-5" >
      <Navbar.Brand href="./">MedChronicle</Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse className="justify-end">
        <NavDropdown title="Products" id="basic-nav-dropdown" className="px-[40px]">
            <NavDropdown.Item href="#/MedConnect">MedConnect</NavDropdown.Item> 
            <NavDropdown.Item href="#/MedCharts">MedCharts</NavDropdown.Item>
            <NavDropdown.Item href="#/MedNotes">MedNotes</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className="px-[40px]">
          <Nav.Link href="#about" eventKey="About">About Us</Nav.Link>
        </Nav.Item>

        <Nav.Item className="pl-[40px]">
            <Button variant="outline-primary" onClick={props.joinUs} > Join Us </Button>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BasicNavBar;
