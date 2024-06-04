import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
type CardDataType = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: any;
};

const CardSection = () => {
  const [cardData, setCardData] = useState<CardDataType[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setCardData([...res.data]);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  }, []);
  return (
    <section>
      <h1 className="mt-8 text-4xl text-center font-bold">Dynamic Cards</h1>
      <div
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-9 mt-14 mb-5"
      >
        {cardData.map((item, index) => (
          <Card
            key={index}
            id={item?.id}
            img={item?.image}
            title={item?.title}
            price={item.price}
            description={item?.description}
            category={item?.category}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
