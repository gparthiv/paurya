import IssueCard from "../components/cards/IssueCard";
import StatCard from "../components/cards/StatCard";
import mockIssues from "../data/mockIssues";

import SectionHeader from "../components/ui/SectionHeader";

function Dashboard() {
  const today = new Date().toDateString();

  return (
    <div className="space-y-10 p-6">

      {/* Header Section */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900">
          PAURYA DASHBOARD
        </h1>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <p className="mt-2 text-xl text-gray-600">
            See it. Report it. Improve it.
          </p>
          <p className="mt-1 text-sm text-gray-600">
            {today}
          </p>
        </div>
      </section>

      {/* Stat Grid Section */}
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Issue"
            value="148"
          />
          <StatCard
            title="Pending Issue"
            value="37"
          />
          <StatCard
            title="Resolved Issue"
            value="89"
          />
          <StatCard
            title="High Alerts"
            value="12"
          />
        </div>
      </section>


      {/* Issue Section */}
      <section>
        <SectionHeader
          title="Recent Issues"
          subtitle="Latest reported civic complaints" />
        <div className="space-y-4">
          {mockIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              title={issue.title}
              area={issue.area}
              severity={issue.severity}
              status={issue.status}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Dashboard;