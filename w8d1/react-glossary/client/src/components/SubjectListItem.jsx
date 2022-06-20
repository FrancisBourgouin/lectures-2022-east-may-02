// Subject name: subject ("")
// Statements: statementList (["",""])

import StatementList from "./StatementList";

export default function SubjectListItem(props) {
  const { subject, statementList } = props;
  return (
    <div>
      <h1>{subject}</h1>
      <StatementList statements={statementList} />
    </div>
  );
}
