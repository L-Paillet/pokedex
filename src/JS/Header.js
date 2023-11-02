import "../CSS/style.css";
import pokeMap from "../asset/johto.png";
import arrow from "../asset/chevrondown-removebg-preview.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useRef } from "react";

export default function Header() {
    const section = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        })
    }
    return (
        <div>
            {/* Navbar avec react bootstrap */}
            <Navbar expand="lg" className="navColor">
                <Container>
                    <Navbar.Brand className="textNav" href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* rajouter lien github et portefolio  */}
                        <Nav.Link className="textNav" href="#home">Home</Nav.Link>
                        <Nav.Link className="textNav" href="#link">Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <img onClick={() => scrollToSection(section)} className="scrollBtn" alt="" src={arrow}></img>
                {/* <FontAwesomeIcon icon="fa-solid fa-angles-down" bounce style={{color: "#434370",}} /> */}
                {/* <button  className="buttonScroll">CLICK HERE</button> */}
                <img className="parallax" alt="" src={pokeMap}></img>

            </div>
            <div ref={section}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Platea dictumst quisque sagittis purus sit amet. Aliquet eget sit amet tellus cras adipiscing enim eu. Dui faucibus in ornare quam viverra orci sagittis. 
                    Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Auctor neque vitae tempus quam pellentesque nec nam. Faucibus purus in massa tempor nec feugiat nisl. Ornare arcu dui vivamus arcu felis. Vel quam elementum pulvinar etiam non quam lacus. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Suspendisse in est ante in nibh mauris cursus mattis molestie. Donec ac odio tempor orci. Donec enim diam vulputate ut pharetra sit amet aliquam id. Auctor eu augue ut lectus arcu bibendum. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.

                    Enim sit amet venenatis urna cursus eget. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. 
                    In est ante in nibh mauris cursus mattis molestie a. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. 
                    Venenatis urna cursus eget nunc scelerisque viverra. Cursus eget nunc scelerisque viverra mauris in. Purus gravida quis blandit turpis cursus. Sem integer vitae justo eget magna fermentum iaculis eu non. Nec nam aliquam sem et tortor. Imperdiet proin fermentum leo vel orci porta non. Dictum non consectetur a erat nam. Sed cras ornare arcu dui vivamus.

                    Maecenas volutpat blandit aliquam etiam. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Quisque egestas diam in arcu cursus euismod quis viverra nibh. In nisl nisi scelerisque eu ultrices vitae auctor. Enim eu turpis egestas pretium. Quam lacus suspendisse faucibus interdum posuere. Est ultricies integer quis auctor elit sed vulputate. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ornare arcu odio ut sem. In nibh mauris cursus mattis molestie a iaculis. Sed cras ornare arcu dui. Eros in cursus turpis massa tincidunt dui ut ornare lectus.

                    Tristique nulla aliquet enim tortor at. Sollicitudin ac orci phasellus egestas. Vehicula ipsum a arcu cursus vitae congue mauris. Nec sagittis aliquam malesuada bibendum arcu vitae. Sit amet risus nullam eget felis eget. Condimentum mattis pellentesque id nibh tortor id aliquet. Molestie at elementum eu facilisis sed odio morbi. Vulputate sapien nec sagittis aliquam malesuada bibendum. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    )
}