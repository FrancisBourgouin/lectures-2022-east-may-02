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

const fancyStatementsOhYeah = {
  components: ["...", "..."],
  props: ["...", "..."],
};

// All the keys of our output object are values of the subject key
// The elements of the arrays in the final object are the content key of the original

const output = {};

// All the keys should start with an array first

statementProps.forEach((statement) => (output[statement.subject] = []));

console.log(output);

statementProps.forEach((statement) => output[statement.subject].push(statement.content));

console.log(output);
