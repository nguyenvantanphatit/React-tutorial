export interface PaymentDetailsProps {
  items: PaymentDetailsItemProps;
}

export interface PaymentDetailsItemProps {
  email_address: string;
  card_number: string;
  expiry_date: string;
  CVV: string;
  subtotal: number;
  platfrom_free: number;
  total_amount: number;
}
export interface PaymentDesc {
  title: string;
  title_professional: string;
  desc_1: string;
  desc_2: string;
  desc_3: string;
  desc_4: string;
  title_modify: string;
}
