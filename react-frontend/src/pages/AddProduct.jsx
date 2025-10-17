import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
import GatewayServiceApi from "../api/GatewayServiceApi";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [validation, setValidation] = useState("");

  const storeProductApi = async () => {
    try {
      const response = await GatewayServiceApi.post("api/store-product", {
        product_name: productName,
        product_price: productPrice,
        product_description: productDescription,
      });
     
      
     if(response.status === 200){
      setProductName("")
      setProductPrice("")
      setProductDescription("")
      setValidation("")
     }
    } catch (error) {
      setValidation(error.response.data.errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storeProductApi();
  };
  return (
    <section>
      <div className="p-2 grid justify-center">
        <Paper elevation={3}>
          <div className="p-4 grid gap-4 ">
            <b className="bg-violet-300 p-2 rounded-1xl">New Product</b>

            <form onSubmit={handleSubmit} className="p-2 ">
              <div className="grid gap-5">
                <TextField
                  label="Product name"
                  color="secondary"
                  error={validation?.product_name}
                  helperText={validation?.product_name}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />

                <TextField
                  label="Price"
                  type="number"
                  color="secondary"
                  error={validation?.product_price}
                  helperText={validation?.product_price}
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />

                <TextField
                  label="Product description"
                  color="secondary"
                  multiline
                  rows={4}
                  error={validation?.product_description}
                  helperText={validation?.product_description}
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>
              <div className="text-end mt-4">
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </div>
    </section>
  );
};

export default AddProduct;
