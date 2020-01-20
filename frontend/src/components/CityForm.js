import { Form, Button, Select } from 'antd'
import React from 'react';

const { Option } = Select;
const CityForm = Form.create({ name: 'city-form' })(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.children = [];
            children.push(<Option key={'detroit'}>Detroit</Option>);
            children.push(<Option key={'manhattan'}>Manhattan</Option>);
            children.push(<Option key={'dallas'}>Dallas</Option>);
        }


        handleChange = () => {

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
                            onChange={handleChange}
                        >
                            {children}
                        </Select>,
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

export default CityForm;