import React from 'react'
import { PaymentDetailsItemProps } from './type'
import { Col, Row, Input, Form, Checkbox, Button } from 'antd';

export default function PaymentItem(props:PaymentDetailsItemProps){
    const { email_address, card_number, expiry_date, CVV } = props;
    const paymentDetails = [
        { label: "Email Address", value: email_address },
        { label: "Card Number", value: card_number },
        { label: "Expiry Date", value: expiry_date },
        { label: "CVV", value: CVV }
    ];

    return (
        <Row>
            <Col span={12}>
                {paymentDetails.map(detail => (
                    <Form.Item key={detail.label} label={detail.label}>
                        {detail.value}
                    </Form.Item>
                ))}
            </Col>
        </Row>
    );
}