// statements props is:
// [
//   { content: "", id: "" },
//   { content: "", id: "" },
// ]

export default function StatementList(props) {
  const { statements } = props;

  const parsedStatements = statements.map((statement) => (
    <li key={statement.id}>{statement.content}</li>
  ));
  return <ul>{parsedStatements}</ul>;
}
