function StatCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-500">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-gray-900" >
        {value}
      </h3>
    </div>
  );
}

export default StatCard;