// src/pages/OrderDetailPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/axios";
import Navbar from "../components/Navbar";

interface Order {
  id: number;
  title: string;
  description: string; // Add other fields as necessary
}

const OrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);

  const fetchOrderDetail = async () => {
    try {
      const response = await api.get(`/orders/${id}`);
      setOrder(response.data); // Assuming your API returns the order detail
    } catch (error) {
      console.error("Failed to fetch order details:", error);
    }
  };

  useEffect(() => {
    fetchOrderDetail();
  }, [id]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <Navbar/>
      <h2>{order.title}</h2>
      <p>{order.description}</p>
    </div>
  );
};

export default OrderDetailPage;
