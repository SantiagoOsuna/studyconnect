import "../styles/components/Layout.css";

export function Container({ children }) {
  return <div className="container">{children}</div>;
}

export function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default { Container, Card };
