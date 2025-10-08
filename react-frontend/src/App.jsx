import { useEffect, useState } from "react";
import "./App.css";
import productApi from "./api/productApi";

function App() {
 
  const [data, setData] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const response = await productApi.get("/get-products"); 
      setData(response.data);
    };
    getProduct();
  }, []);

  return (
    <>
      <div>

        <table border={23} cellPadding={4}>
          {data &&
            data.map((product) => (
              <tr key={product.id}>
                <td>{product.product_price}</td>
                <td>{product.product_description}</td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}

export default App;
