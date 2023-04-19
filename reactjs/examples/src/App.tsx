import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import FormPayment from "./components/FormPayment"
import "./App.css";
import React from "react";
import { SideBarItemProps } from "./components/SideBar/types";
import { PaymentDetailsItemProps } from "./components/FormPayment/type";
// const dummyData = [
//   { id: 0, name: "Test1", icon: "" },
//   { id: 1, name: "Test2", icon: "" },
//   { id: 2, name: "Test3", icon: "" },
//   { id: 3, name: "Test4", icon: "" },
// ];
function App() {
  // const [items, setItems] = React.useState<any>([]);
  // useEffect(() => {
  //   setItems(dummyData);
  // }, []);
  // return <SideBar items={items} />;

  //Form Payment
  const [items, setItems] = useState<PaymentDetailsItemProps>({
    email_address: 'nguyenvantanphat.it@gmail.com',
    card_number: '31023120323',
    expiry_date: '12/24',
    CVV: '123',
    subtotal: 96,
    platfrom_free:4,
    total_amount:100
  });
  useEffect(() => {
    setItems(prevItems => ({
      ...prevItems,
      total: prevItems.subtotal + prevItems.platfrom_free,
    }));
  }, [items.subtotal, items.platfrom_free]);
  
  

  return <FormPayment subtotal={items.subtotal} platfrom_free={items.platfrom_free} total_amount={items.total_amount} email_address={items.email_address} card_number={items.card_number} expiry_date={items.expiry_date} CVV={items.CVV} />;
//DashBoard
  // return <DashBoard />
}

export default App;
