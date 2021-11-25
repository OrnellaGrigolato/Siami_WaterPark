import { Form, Input, InputNumber, Button, Select } from 'antd';
import {CartContext} from "../Context/CartContext";
import React from 'react';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Payment = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const {cart} = React.useContext(CartContext)
  console.log(cart)
  return (
<>
 <div>{cart.map(elem=>{
     const visitors = []
     for(let i=1; i<+elem.quantity; i++){
         visitors.push('Visitor' +i )
     }
     console.log(visitors)
    return (<><p>{elem.item.title}</p>{visitors?.map(item=><p>{item}</p>)}</>)
 })}</div>



    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 120 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label='Number of Visitors'>
        <Select>
            <Select.Option value='1'>1</Select.Option>
            <Select.Option value='2'>2</Select.Option>
            <Select.Option value='3'>3</Select.Option>
            <Select.Option value='4'>4</Select.Option>
            <Select.Option value='5'>5</Select.Option>
            <Select.Option value='6'>6</Select.Option>
            <Select.Option value='7'>7</Select.Option>
            <Select.Option value='8'>8</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};


export default Payment

