import axios from 'axios';

const PRODUCT_API_URL = 'http://localhost:8080/find-any/product';
const PRODUCT_FEED_API_URL = 'http://localhost:8080/find-any/product-feed';

export const addProduct = async (product, image, headers) => {
  try {
    var formData = new FormData();
    formData.append('product', JSON.stringify(product));
    formData.append('image', image);
    return await axios.post(PRODUCT_API_URL, formData, {
      headers: headers,
    });
  } catch (e) {
    throw e;
  }
};

export const getAllProductsByUser = async headers => {
  try {
    return await axios.get(PRODUCT_API_URL, {
      headers: headers,
    });
  } catch (e) {
    throw e;
  }
};

export const getProductsForFeed = async (headers, location, page) => {
  try {
    return await axios.get(PRODUCT_FEED_API_URL + `/${location}?page=${page}`, {
      headers: headers,
    });
  } catch (e) {
    throw e;
  }
};
