// src/pages/OrderPage.tsx
import React, { useEffect, useState } from "react";
import api from "../services/axios";
import Navbar from "../components/Navbar";

interface Order {
  id: number;
  title: string;
  // Add other fields as necessary
}

const OrderPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");
      setOrders(response.data); // Assuming your API returns an array of orders
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Navbar/>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <a href={`/orders/${order.id}`}>{order.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderPage;
