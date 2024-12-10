import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  // get the products from useContext
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];

      productsCopy = productsCopy.filter(
        (product) =>
          category === product.category && subCategory === product.subCategory
      );

      setRelatedProducts(productsCopy.slice(5));
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='py-2 text-3xl text-center '>
        {/* Render Title */}
        <Title text1={"Related"} text2={"Products"}></Title>
      </div>
      {/* Render Related Products Grid with ProductItem Component */}
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
        {relatedProducts.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          ></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
