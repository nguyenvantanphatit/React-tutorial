import React from 'react'
import { PaymentDetailsItemProps } from './type'
import { Col, Row, Input, Form, Checkbox, Button } from 'antd';
export default function PaymentItem(props:PaymentDetailsItemProps){
    const {email_address,card_number,expiry_date,CVV} = props;
    return
    (
        <Row>
               <Col span={12}>
                    <Form.Item>
                    {email_address}
                    </Form.Item>
                    <Form.Item>
                    {card_number} 
                    </Form.Item>
                    <Form.Item>
                    {expiry_date}
                    </Form.Item>
                    <Form.Item>
                    {CVV}
                    </Form.Item>
                </Col>
        </Row>
    )  
}