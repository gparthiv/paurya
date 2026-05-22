import IssueCard from "../components/cards/IssueCard";
import mockIssues from "../data/mockIssues";

function Dashboard() {
  return (
    <div className="p-6">

      <section>
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