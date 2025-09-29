"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setGoods(data);
      });
  }, []);
  return (
    <div>
      hello
      <div>
        {/* {goods.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))} */}
      </div>
    </div>
  );
}
