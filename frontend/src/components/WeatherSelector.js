import React from 'react'
import { Row, Col, Card } from 'antd'
import CityForm from './CityForm'
import CityInfo from './Info/Cityinfo';
export default class WeatherSelector extends React.Component {
    render() {
        return (<div>
            <Row>
                <Col span={6}>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <Card title="Weather Form">
                            <CityForm />
                        </Card>
                    </div>
                </Col>
                <Col span={18}>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <Card title="Info">
                            <CityInfo />
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>)
    }
};