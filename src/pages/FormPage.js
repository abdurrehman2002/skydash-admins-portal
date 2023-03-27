import React from 'react';
import Header from '../components/Header';
import { Row, Col } from 'react-bootstrap';
import SideNav from '../components/SideNav';
import Logo from '../components/Logo';

function FormPage() {
    return (
        <div style={{padding:"20px"}}>
            <Row>
                <Col lg={2} >
                    <Logo />
                    <SideNav />
                </Col>

                <Col lg={10} >
                    <Header />
                    <Row>
                        <Col lg={6}>
                            <h3 style={{marginTop:'20px'}}>Student Form</h3>
                            <form className='loginForm'>
                                <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="text" class="form-control" placeholder='Username' />
                                </div>

                                <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder='Email' />
                                </div>

                                <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label">Password</label>
                                    <input type="password" class="form-control" placeholder='Password' />
                                </div>

                                <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label">Phone number</label>
                                    <input type="number" class="form-control" placeholder='Phone Number' />
                                </div>

                                <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label">Address</label>
                                    <input type="text" class="form-control" placeholder='Address' />
                                </div>

                                <button class="btn">Submit</button>
                            </form>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    )
}
export default FormPage;
