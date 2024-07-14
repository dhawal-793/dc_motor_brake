import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { products } from "../data/products";

const ProductPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchProductById = (slug) => {
    try {
      setIsLoading(true);
      console.log(slug);
      let data = products.filter((product) => product.slug == slug);
      if (data) {
        console.log(data[0]);
        setProductData(data[0]);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log("Something Went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductById(slug);
  }, [slug]);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-10 py-8">
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6"
        >
          <span className="h-5 fa-solid fa-arrow-left" />
          <span>Back</span>
        </button>
      </div>
      {isLoading ? (
        <p className="text-center my-20">Loading...</p>
      ) : isError ? (
        <p className="text-center my-20 text-red-500">
          Opps! Something went wrong
        </p>
      ) : (
        productData && (
          <div className="grid grid-cols-1 px-4 sm:px-20 md:px-4 md:grid-cols-2 gap-6 w-full mx-auto">
            <div className="w-full">
              <img
                src={productData?.preview_image}
                alt=""
                className="rounded-sm"
              />
            </div>
            <div className="">
              <div>
                <h2 className="text-3xl lg:text-2xl font-bold my-2 text-primary">
                  {productData?.name}
                </h2>
                <p>{productData?.description}</p>
                <h2>{productData?.name}</h2>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductPage;
