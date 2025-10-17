import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import GatewayServiceApi from "../api/GatewayServiceApi";

const MyOrder = () => {
  const [orders, setOrders] = useState("");

  useEffect(() => {
    const userOrderApi = async () => {
      const response = await GatewayServiceApi.get("/api/show-user-order");
      setOrders(response.data);
    };
    userOrderApi();
  }, []);
  return (
    <div>
      <table className="border-1 border-gray-600">
        <thead>
          <tr>
        
            <th className="border border-gray-500 p-2">user id</th>
                <th className="border border-gray-500 p-2">product id</th>
            <th className="border border-gray-500 p-2">quantity</th>
            <th className="border border-gray-500 p-2">Action</th>
          </tr>
        </thead>

        {orders &&
          orders.map((data) => (
            <tbody key={data.id}>
              <tr>
                <td className="border border-gray-500 p-2">{data.user_id}</td>
                <td className="border border-gray-500 p-2">{data.product_id}</td>
                <td className="border border-gray-500 p-2">{data.quantity}</td>

                <td className="border border-gray-500 p-2">
                  <div className="flex gap-2">
                    <Button variant="contained" color="info" size="small">
                      Delete
                    </Button>
                    <Button variant="contained" color="error" size="small">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default MyOrder;
