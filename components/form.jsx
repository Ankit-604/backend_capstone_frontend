export default function Form() {
    const formFields = [
    {
      type: "text",
      label: "First Name",
      name: "Name",
      placeholder: "Enter your first name",
      required: true,
    },
    {
      type: "email",
      label: "Email",
      name: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
        type: "password",
        label: "Password",
        name: "password",
        placeholder: "Enter your password",
        required: true,
      },
      {
        type: "password",
        label: "Confirm Password",
        name: "confirmPassword",
        placeholder: "Confirm your password",
        required: true,
      }
    ];
  return (
    <di
    v>
      <h1>Form</h1>
    </di>
  );
}
