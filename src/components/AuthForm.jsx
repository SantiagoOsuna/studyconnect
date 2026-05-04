import { Link } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {fields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:-translate-y-0.5"
          >
            {buttonText}
          </button>

          <p className="text-sm text-center text-gray-600">
            {linkText.text}{" "}
            <Link
              to={linkUrl}
              className="text-blue-600 hover:underline font-medium"
            >
              {linkText.link}
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default AuthForm;