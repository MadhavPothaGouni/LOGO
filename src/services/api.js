import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000
});

export const fetchProducts = async () => {
  const { data } = await API.get("/products");
  // Map to your card shape if needed
  return data.map(p => ({
    id: p.id,
    title: p.title,
    price: p.price,
    image: p.image,
    category: p.category,
    rating: p.rating?.rate ?? 0,
    ratingCount: p.rating?.count ?? 0
  }));
};
