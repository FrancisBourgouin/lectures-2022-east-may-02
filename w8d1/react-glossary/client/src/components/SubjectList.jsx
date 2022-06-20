import SubjectListItem from "./SubjectListItem";

// statements props is:
const statementProps = [
  {
    id: 1,
    subject: "components",
    content: "Components are the building blocks of react",
  },
  {
    id: 2,
    subject: "components",
    content:
      "Take a functionality of a small piece of your application and encapsulated its own isolated container",
  },
  {
    id: 3,
    subject: "props",
    content:
      "Props are to components what attributes are to an HTML element (the 'src' tag in an <img> is needed to make the image work)",
  },
  {
    id: 4,
    subject: "props",
    content:
      "Props are accessible in an object in the first argument of a functional component",
  },
];

// Should convert to:
// const fancyStatementsOhYeah = {
//   components: ["...", "..."],
//   props: ["...", "..."],
// };
// Should convert to:
const fancyStatementsOhYeah = {
  components: [
    { content: "", id: "" },
    { content: "", id: "" },
  ],
  props: [
    { content: "", id: "" },
    { content: "", id: "" },
  ],
};

export default function SubjectList(props) {
  const organizeStatementsPerSubject = (statementList) => {
    const output = {};

    // All the keys should start with an array first

    statementList.forEach((statement) => (output[statement.subject] = []));

    statementList.forEach((statement) =>
      output[statement.subject].push({ content: statement.content, id: statement.id })
    );

    return output;
  };

  const { statements } = props;

  const parsedStatements = organizeStatementsPerSubject(statements);
  const parsedSubjects = Object.keys(parsedStatements).map((subject) => (
    <SubjectListItem
      key={subject}
      subject={subject}
      statementList={parsedStatements[subject]}
    />
  ));
  return (
    <section>
      <h1>List Of Statements About React</h1>
      {parsedSubjects}
    </section>
  );
}
