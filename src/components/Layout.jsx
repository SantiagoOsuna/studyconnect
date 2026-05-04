export function Container({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {children}
    </div>
  );
}

export function Card({ children }) {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      {children}
    </div>
  );
}

export default { Container, Card };