// src/services/api.js
export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("API error");
  // Normalize to match your card fields
  const data = await res.json();
  return data.map(p => ({
    id: p.id,
    title: p.title,
    price: p.price,
    image: p.image
  }));
}
