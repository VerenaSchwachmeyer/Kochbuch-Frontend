import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <div className="backbutton">
      <Link to={`http://localhost:3000/`}>Zurück zum Hauptmenü</Link>
    </div>
  );
}
