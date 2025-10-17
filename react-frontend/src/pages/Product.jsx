import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GatewayServiceApi from "../api/GatewayServiceApi";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleBuyProduct = () => {
    alert("hi")
  };

  useEffect(() => {
    const productApi = async () => {
      const response = await GatewayServiceApi.get("/api/show-product-list");
      setIsLoading(false);
      setProductData(response.data);
    };
    productApi();
  }, []);
  return (
    <section>
      <div className="flex gap-4 flex-wrap">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          productData.map((product) => (
            <Paper elevation={3}>
              <div className="w-50 h-50 grid gap-2 justify-between content-start p-2">
                <span className="font-bold bg-green-400 rounded-1xl p-1">
                  {product.product_name}
                </span>
                <div className="h-25 bg-gray-100 p-1 rounded-md overflow-hidden">
                  <span>
                    <b>Description</b>: {product.product_description}
                  </span>
                </div>
                <div className="flex justify-between items-center flex-wrap">
                  <span className="text-green-500 font-bold">
                    P{product.product_price}
                  </span>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    endIcon={<AddShoppingCartIcon />}
                    onClick={handleBuyProduct}
                  >
                    Buy now!
                  </Button>
                </div>
              </div>
            </Paper>
          ))
        )}
      </div>
    </section>
  );
};

export default Product;
