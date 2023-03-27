import React from 'react';
import Header from '../components/Header';
import { Row, Col } from 'react-bootstrap';
import SideNav from '../components/SideNav';
import Logo from '../components/Logo';
import peopleImg from '../assets/images/people.svg';
import DashboardCard from '../components/DashboardCard';



function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <Row>
        <Col lg={2} >
          <Logo />
          <SideNav />
        </Col>

        <Col lg={10} >
          <Header />

          <div className='dashboardHeading'>
            <h2>Welcome Aamir</h2>
            <p>All systems are running smoothly! You have <span>3 unread alerts!</span></p>
          </div>

          <Row>
            <Col lg={6} className="dashboardImage">
              <img src={peopleImg} alt={"people image"} />
            </Col>
            <Col lg={6}>
              <Row style={{padding: "0px 10px"}}>
                <Col lg={6}>
                  <DashboardCard marginBottom="40px" cardTiltle={"Today’s Students"}
                    cardText={"22.00% (30 days)"} cardNumbers={"40006"} />
                </Col>
                <Col lg={6}>
                  <DashboardCard cardTiltle={"New Students"}
                    cardText={"10.00% (30 days)"} cardNumbers={"61344"}  />
                </Col>
                <Col lg={6}>
                  <DashboardCard cardTiltle={"Old Students"}
                    cardText={"2.00% (30 days)"} cardNumbers={"34040"}  />
                </Col>
                <Col lg={6}>
                  <DashboardCard  cardTiltle={"Total Students"}
                    cardText={"0.22% (30 days)"} cardNumbers={"47033"}  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

      </Row>
    </div>
  )
}

export default Dashboard;
