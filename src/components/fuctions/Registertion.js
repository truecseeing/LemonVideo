import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../CSS/register.css'
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker, TimePicker
  } from 'antd';
import {submitUser} from '../../action/login.js'
import { QuestionCircleOutlined } from '@ant-design/icons';

 const { MonthPicker, RangePicker } = DatePicker;
 const { Option } = Select;
 const AutoCompleteOption = AutoComplete.Option;

 const Registertion = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

   const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

};
export default Registertion
