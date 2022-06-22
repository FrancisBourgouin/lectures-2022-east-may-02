import { useState } from "react";

export default function useForm(initialValues, submitAction) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (formData.email !== "") {
    submitAction(formData);

    setFormData(initialValues);
    // }
  };

  return { formData, handleChange, handleSubmit };
}
