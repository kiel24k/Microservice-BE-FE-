import React, { useEffect, useState } from "react";

import GatewayServiceApi from "../api/GatewayServiceApi";

const UserOrders = () => {
  const [userOrder, setUserOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchUserOrder = async () => {
      setIsLoading(true);
      const response = await GatewayServiceApi.get("/api/show-orders");
      setIsLoading(false);
      setUserOrder(response.data);
    };
    fetchUserOrder();
  }, []);
  return (
    <section>
      <table className="border-1 p-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Product name</th>
            <th>Product name</th>
            <th>Date</th>
          </tr>
        </thead>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          userOrder.map((data) => (
            <tbody>
              <tr>
                <td className="border p-2">
                  {data.user.name} / {data.user.email}{" "}
                </td>
                <td className="border p-2">{data.product.product_name}</td>
                <td className="border p-2">{data.product.product_price}</td>
                <td className="border p-2">{data.order.created_at}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </section>
  );
};

export default UserOrders;
