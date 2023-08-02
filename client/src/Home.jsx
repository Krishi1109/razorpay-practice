import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import img from "./Images/car.jpg";
import img2 from "./Images/car2.jpg";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {

    const {data : {key}} = await axios.get("http://localhost:4000/api/getkey")
    const {data : {order}} = await axios.post("http://localhost:4000/api/checkout", { amount });

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Krishi Tanna",
        description: "Learning RozarPay",
        image: {img},
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={["column", "row"]}
      >
        <Card amount={10} img={img} checkoutHandler={checkoutHandler} />
        <Card amount={12000} img={img2} checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  );
};

export default Home;
