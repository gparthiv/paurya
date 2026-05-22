import Badge from "../ui/Badge";


function IssueCard({ title, area, severity, status }) {

  let severityStyles = "";
  if (severity == "High")
    severityStyles = "bg-red-100 text-red-700";
  else if (severity == "Medium")
    severityStyles = "bg-yellow-100 text-yellow-700";
  else if (severity == "Low")
    severityStyles = "bg-green-100 text-green-700";

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">
        {title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {area}
      </p>

      <div className="flex items-center gap-3 mt-4">

        <Badge
          text={`${severity} Severity`}
          styles={severityStyles}
        />

        <Badge
          text={status}
          styles="bg-gray-100 text-gray-700"
        />
      </div>
    </div>
  );
}

export default IssueCard;