function ItemCard({ title, children, color = "blue" }) {
  const colors = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    yellow: "border-yellow-500 bg-yellow-50",
    pink: "border-pink-500 bg-pink-50",
    purple: "border-purple-500 bg-purple-50",
  };

  return (
    <div
      className={`relative p-5 rounded-xl border-l-4 shadow-sm hover:shadow-md transition ${colors[color]}`}
    >
      <div className="mb-2">
        <h4 className="text-lg font-semibold text-gray-800">
          {title}
        </h4>
      </div>

      <div className="text-sm text-gray-600">
        {children}
      </div>
    </div>
  );
}

export default ItemCard;