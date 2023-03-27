import React from 'react'
import Header from '../components/Header';
import { Row, Col} from 'react-bootstrap';
import SideNav from '../components/SideNav';
import Logo from '../components/Logo';


function HomePage() {
    return (
        <div style={{padding:"20px"}}>
            <Row>
                <Col lg={2} >
                    <Logo />
                    <SideNav />
                </Col>

                <Col lg={10} >
                    <Header />
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;
