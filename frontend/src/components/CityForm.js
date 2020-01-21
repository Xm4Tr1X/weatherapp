import { Form, Button, Select } from 'antd'
import React from 'react';
import {connect} from 'react-redux';
import {fetchForm} from '../actions/formAction';
import {fetchInfo} from '../actions/infoAction'

const { Option } = Select;
const CityForm = Form.create({ name: 'city-form' })(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.children = [];
            this.children.push(<Option key={'detroit'}>Detroit</Option>);
            this.children.push(<Option key={'manhattan'}>Manhattan</Option>);
            this.children.push(<Option key={'dallas'}>Dallas</Option>);
        }

        componentDidMount(){
            this.props.fetchForm()
        }

        handleSubmit = (e) => {
            e.preventDefault();
            this.props.fetchInfo()
        }
        render() {
            return (
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={['detroit']}
                        >
                            {this.children}
                        </Select>
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

const mapStateToProps = ({form}) => {
    return {form: form.form}
};

export default connect(mapStateToProps, {fetchForm, fetchInfo})(CityForm);