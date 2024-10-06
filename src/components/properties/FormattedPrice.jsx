// eslint-disable-next-line react/prop-types
export default function FormattedPrice({ amount, currency = "৳" }) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <span className="text-xl font-extrabold text-blue-600">
      {currency}
      {"  "}
      {formattedAmount}
    </span>
  );
}
