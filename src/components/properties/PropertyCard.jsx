/* eslint-disable react/prop-types */
import Bath from "../../assets/svg/properties/Bath";
import Bed from "../../assets/svg/properties/Bed";
import FormattedPrice from "./FormattedPrice";

export default function PropertyCard({ property }) {
  const { imageSource, name, beds, baths, price } = property;

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={imageSource} />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{name}</h4>
        <div className="mt-2">
          <FormattedPrice amount={price} />
          {" /M"}
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <Bed />
          <p>
            <span className="font-bold text-gray-900">{beds}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <Bath />
          <p>
            <span className="font-bold text-gray-900">{baths}</span> Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}
