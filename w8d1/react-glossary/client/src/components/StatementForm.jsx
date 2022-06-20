import { useState } from "react";

export default function StatementForm(props) {
  const initialValues = { content: "", subject: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Enter a new statement</h1>
      <input
        type="text"
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Enter the content"
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter the subject"
      />
      <button type="submit">Add new statement</button>
    </form>
  );
}
