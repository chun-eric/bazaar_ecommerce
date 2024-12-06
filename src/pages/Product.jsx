import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams(); // extract the id paramter from the URL

  return <div>Product</div>;
};

export default Product;
