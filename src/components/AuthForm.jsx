import { Link } from "react-router-dom";
import { Container, Card } from "./Layout";

function AuthForm({
  title,
  fields,
  formData,
  handleChange,
  handleSubmit,
  buttonText,
  linkText,
  linkUrl,
}) {
  return (
    <Container>
      <Card>
        <h2>{title}</h2>

        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          ))}

          <button type="submit">{buttonText}</button>

          <p>
            {linkText.text} <Link to={linkUrl}>{linkText.link}</Link>
          </p>
        </form>
      </Card>
    </Container>
  );
}

export default AuthForm;
