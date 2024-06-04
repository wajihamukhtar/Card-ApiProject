import { Link } from "react-router-dom";

const Card = (props: any) => {
  const {id, img, title, price, description, category } = props;
  return (
    <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link to={`/product-id/${id}`}>
        <div className="w-52 h-64 m-auto">
        <img
          src={img}
          alt="Product"
          className="h-full w-full rounded-t-xl"
        />
        </div>
        <div className="px-4 py-3 w-80 ">
          <p className="text-xl font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="description pt-2 text-gray-400 mr-3 uppercase text-sm h-28">
            <p className="">{description}</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2">$</div>
            <p className="text-lg font-semibold text-black cursor-auto mr-auto my-3">
              {price}
            </p>
            <p className="text-sm text-gray-600 cursor-auto ml-2">{category}</p>
          </div>
        </div>
        </Link>
    </div>
  );
};
export default Card;
