import useForm from "../hooks/useForm";

export default function LoginForm(props) {
  const baseInputs = {
    email: "",
    password: "",
  };
  const { formData, handleChange, handleSubmit } = useForm(baseInputs, props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" value={formData.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit!</button>
    </form>
  );
}
