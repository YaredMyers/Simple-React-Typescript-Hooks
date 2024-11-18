import useForm from "../hooks/useForm";

interface FormData {
  name: string;
  email: string;
  age: number;
}

const Form = () => {
  const { form, handleChange } = useForm<FormData>({
    name: "Yared",
    email: "yared@yared.com",
    age: 34,
  });
  const { name, email, age } = form;

  return (
    <form autoComplete={"off"}>
      <div className={"mb-3"}>
        <label className={"form-label"}>Email:</label>
        <input
          type={"email"}
          className={"form-control"}
          name={"email"}
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className={"mb-3"}>
        <label className={"form-label"}>Name:</label>
        <input
          type={"text"}
          className={"form-control"}
          name={"name"}
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className={"mb-3"}>
        <label className={"form-label"}>Age:</label>
        <input
          type={"text"}
          className={"form-control"}
          name={"age"}
          value={age}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form;
