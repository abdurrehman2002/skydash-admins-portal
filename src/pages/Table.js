import React from 'react';
import Header from '../components/Header';
import { Row, Col } from 'react-bootstrap';
import SideNav from '../components/SideNav';
import Logo from '../components/Logo';

const tableData = [
    {
        name: "Ali",
        email: "ali@gmail.com",
        phoneNumber: "123456789",
        address: "Lahore"
    },
    {
        name: "Ali",
        email: "ali@gmail.com",
        phoneNumber: "123456789",
        address: "Lahore"
    },
    {
        name: "Ali",
        email: "ali@gmail.com",
        phoneNumber: "123456789",
        address: "Lahore"
    },
    {
        name: "Ali",
        email: "ali@gmail.com",
        phoneNumber: "123456789",
        address: "Lahore"
    },
]
function Table() {
    return (
        <div style={{ padding: "20px" }}>
            <Row>
                <Col lg={2} >
                    <Logo />
                    <SideNav />
                </Col>

                <Col lg={10} >
                    <Header />

                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map((x) => {
                                        return (
                                            <tr className='tableTr'>
                                                <td>{x.name}</td>
                                                <td>{x.email}</td>
                                                <td>{x.phoneNumber}</td>
                                                <td>{x.address}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </Col>
            </Row>
        </div>
    )
}
export default Table;
