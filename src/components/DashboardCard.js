
import { Row, Col, Card } from 'react-bootstrap';


function DashboardCard(props) {
    return (
        <Row >
            <Col>
                <Card style={{marginBottom:props.marginBottom}} className='DashboardCard'>
                    <div className='DashboardCardIcon'> 
                    </div>
                    <div className='DashboardCardBody'>
                        <div className='DashboardCardTitle'>{props.cardTiltle}</div>
                        <div className='DashboardCardNumbers'>{props.cardNumbers}</div>
                        <div className='DashboardCardText'>{props.cardText}</div>
                    </div>

                </Card>
            </Col>
        </Row>
    );
}

export default DashboardCard;