import React, { useState } from "react";
import { PaymentDesc, PaymentDetailsItemProps } from "./type";
import PaymentItem from "./PaymentItem";
import Introduce from "./Introduce";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Col, Row, Input, Form, Checkbox, Button } from 'antd';
export default function Session_1(props: PaymentDetailsItemProps) {
    const [email_address, setEmail] = useState('')
    const [card_number, setCard] = useState('')
    const [expiry_date, setExpiry_date] = useState("")
    const [CVV, setCvv] = useState('')
    const [promoCodeChecked, setPromoCodeChecked] = useState(false);
    const handleValidation = () => {
        if (!email_address || !card_number || !expiry_date || !CVV || !promoCodeChecked) {
            toast.error("Please fill in all required fields");
            return false;
        }
        return true;
    };
    const handleSubmit = () => {
        if (handleValidation()) {
            toast.success('Your payment was successfull!');
        }
    };
    const paymentDesc: PaymentDesc = {
        title: 'Subscribe and start saving your money today!',
        title_professional: '$96/month',
        desc_1: 'All features in basic included',
        desc_2: 'Easy and flexible business with invoice management',
        desc_3: 'Fulltime',
        desc_4: '20TB cloud storage',
        title_modify: 'Modify plant',
    };
    return (
        <>
            <Form style={{ backgroundColor: 'whitesmoke', borderRadius: '10px' }}>
                <Row>
                    <Col span={15}>
                        <Form.Item label="Email adress">
                            <Input placeholder="@Email.com" value={email_address} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Credit Card Number">
                            <Input placeholder="xxxx xxxx xxxx xxxx" value={card_number} onChange={(e) => setCard(e.target.value)} />
                        </Form.Item>
                        <Row>
                        <Col span={16}>
                        <Form.Item label="Expiry Date">
                            <Input placeholder="mm/yy" value={expiry_date} onChange={(e) => setExpiry_date(e.target.value)} />
                        </Form.Item>
                        </Col>
                        <Col span={8}>
                        <Form.Item label="CVV">
                            <Input value={CVV} placeholder="xxx" onChange={(e) => setCvv(e.target.value)} />
                        </Form.Item>
                        </Col>
                        </Row>                        
                        <ToastContainer />
                        <Checkbox checked={promoCodeChecked} onChange={() => setPromoCodeChecked(!promoCodeChecked)}> I've a promo code</Checkbox>
                        <Form.Item label="Subtotal">
                            ${props.subtotal}
                        </Form.Item>
                        <Form.Item label="Platform Fee">
                            ${props.platfrom_free}
                        </Form.Item>
                        <Form.Item label="Total Amount">
                            ${props.total_amount}
                        </Form.Item>
                        <Button onClick={handleSubmit} style={{ backgroundColor: 'blue', width: '290px'}}>Make payment</Button>
                    </Col>
                    <Col span={9} >
                        <Introduce {...paymentDesc} />
                    </Col>
                </Row>
            </Form>
        </>


    );
}
