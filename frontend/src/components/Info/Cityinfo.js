import { List, Card, Skeleton, Descriptions, Col } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cityinfo extends Component {

    renderForecastItem = (forecasts) => {
        const forecastList = [];
        for (let i = 0; i < forecasts.length; i++) {
            forecastList.push(<Col span={8}><Card key={i} title={forecasts[i].day}>{forecasts[i].text}</Card></Col>)
        }
        return forecastList;
    }
    render() {
        const { data, loading } = this.props.cityList;
        return (
            <div>
                <Skeleton loading={loading} active>
                    <List
                        dataSource={data}
                        renderItem={(item, index) => {
                            const { location, current_observation, forecasts } = item;
                            return (
                                <List.Item>
                                    <Card title={location.city + ', ' + location.region} key={index}>
                                        <Descriptions title="City Info">
                                            <Descriptions.Item label="Timezone">{location.timezone_id}</Descriptions.Item>
                                            <Descriptions.Item label="Woeid">{location.woeid}</Descriptions.Item>
                                            <Descriptions.Item label="Country">{location.country}</Descriptions.Item>
                                            <Descriptions.Item label="Wind Speed">{current_observation.wind.speed + 'mph'}</Descriptions.Item>
                                            <Descriptions.Item label="Weather Condition">
                                                {current_observation.condition.text + ' ' + current_observation.condition.temperature+ 'Fahrenheit'}
                                            </Descriptions.Item>
                                            
                                                
                                            
                                        </Descriptions>
                                        <h3> Forecast</h3>
                                        {this.renderForecastItem(forecasts)};
                                    </Card>
                                </List.Item>
                            )
                        }}
                    />
                </Skeleton>
            </div>
        )
    }
}

const mapStateToProps = ({ infodump }) => ({
    cityList: infodump.city_list
});

export default connect(mapStateToProps, {})(Cityinfo)

