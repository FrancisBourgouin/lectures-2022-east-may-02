import { useState } from "react";

export default function useForm(initialValues, submitAction) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // setFormData({ ...formData, [name]: value });

    // const newFormData = {}
    // for(const key in formData){
    //   newFormData[key] = formData[key]
    // }

    const newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;
    console.log(formData, newFormData);

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
