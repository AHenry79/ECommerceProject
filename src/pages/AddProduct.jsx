import { useState } from "react";
import { useAddProductsMutation } from "../slices/api";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const [price, setPrice] = useState("");
  const [descrip, setDescrip] = useState("");
  const [name, setName] = useState("");
  const [ctgy, setCtgy] = useState("");
  const [image, setImage] = useState("");
  const [availability, setAvailability] = useState(true);

  const navigate = useNavigate();

  const [addProducts, { isLoading }] = useAddProductsMutation();

  const onSubmit = async () => {
    await addProducts({
      price,
      descrip,
      name,
      ctgy,
      image,
      availability,
    }).then(() => {
      navigate("/products");
    });
  };
  return (
    <>
      <div id={"productFormWrapper"}>
        <div id={"productForm"}>
          <input
            type={"number"}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter price..."
          />
          <input
            type={"text"}
            value={descrip}
            onChange={(e) => setDescrip(e.target.value)}
            placeholder="Enter product description..."
          />
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name..."
          />
          <input
            type={"text"}
            value={ctgy}
            onChange={(e) => setCtgy(e.target.value)}
            placeholder="Enter product category..."
          />
          <input
            type={"text"}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image url..."
          />
          <input
            type={"text"}
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            placeholder="Availability? true or false..."
          />
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}
export default AddProduct;
