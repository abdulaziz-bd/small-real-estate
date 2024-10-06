import property01 from "../../assets/images/properties/property-1.jpg";
import property02 from "../../assets/images/properties/property-2.jpg";
import property03 from "../../assets/images/properties/property-3.jpg";
import property04 from "../../assets/images/properties/property-4.jpg";
import property05 from "../../assets/images/properties/property-5.jpg";
import PropertyCard from "./PropertyCard";

export default function Properties() {
  const properties = [
    {
      id: 1,
      imageSource: property01,
      name: "Spacious 2475 Square Feet Apartment in Bashundhara R-A",
      beds: 3,
      baths: 4,
      price: 23500000,
    },
    {
      id: 2,
      imageSource: property02,
      name: "Lovely Apartment Of 2620 Sq Ft in Block D, Bashundhara R-A",
      beds: 4,
      baths: 4,
      price: 20500000,
    },
    {
      id: 3,
      imageSource: property03,
      name: "Apartment Of 3195 Sq Ft At Block C, Bashundhara R-A",
      beds: 4,
      baths: 5,
      price: 34100000,
    },
    {
      id: 4,
      imageSource: property04,
      name: "Well Developed Flat Is Up For Sale In Block I, Bashundhara R-A",
      beds: 3,
      baths: 3,
      price: 12500000,
    },
    {
      id: 5,
      imageSource: property05,
      name: "Beautiful Constructed Apartment Of 1115 Sq Ft In Block J, Bashundhara R/A",
      beds: 3,
      baths: 2,
      price: 12000000,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
