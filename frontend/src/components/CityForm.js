import { Form, Button, Select, Skeleton } from 'antd'
import React from 'react';
import { connect } from 'react-redux';
import { fetchForm } from '../actions/formAction';
import { fetchInfo } from '../actions/infoAction'

const { Option } = Select;
const CityForm = Form.create({ name: 'city-form' })(
    class extends React.Component {
        componentDidMount() {
            this.props.fetchForm()
        }

        handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    this.props.fetchInfo(values.cities)
                }
            });

        }
        renderOptions = () => {
            const children = [];
            for (let i = 0; i < this.props.formData.cities.length; i++) {
                const city = this.props.formData.cities[i];
                const cityText = city[0].toUpperCase() + city.substring(1);
                children.push(<Option key={city}>{cityText}</Option>);
            }
            return children;
        }
        render() {
            const { loading } = this.props.formData;
            const { getFieldDecorator } = this.props.form;

            return (
                loading ? <Skeleton active /> :
                    <Form layout="vertical" onSubmit={this.handleSubmit}>

                        <Form.Item >
                            {getFieldDecorator('cities', {
                                rules: [{ required: true }]
                            })(<Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Please select"

                            >
                                {this.renderOptions()}
                            </Select>)
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Go !
                  </Button>
                        </Form.Item>
                    </Form>
            );
        }
    }
);

const mapStateToProps = ({ form }) => {
    return { formData: form.form }
};

export default connect(mapStateToProps, { fetchForm, fetchInfo })(CityForm);