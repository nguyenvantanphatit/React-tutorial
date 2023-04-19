import { Typography, List, Card, Button } from 'antd';
import { PaymentDesc } from './type';

export default function Introduce(props: PaymentDesc) {
  const { title, title_professional, desc_1, desc_2, desc_3, desc_4, title_modify } = props;

  return (
    <Card title={title} >
      <Typography.Paragraph >{title_professional}</Typography.Paragraph>
      <List>
        <List.Item>{desc_1}</List.Item>
        <List.Item>{desc_2}</List.Item>
        <List.Item>{desc_3}</List.Item>
        <List.Item>{desc_4}</List.Item>
      </List>
      <Typography.Paragraph>{title_modify}</Typography.Paragraph>
    </Card>


  );
}