import { useState } from "react";

//file upload kann man noch implementieren
export default function Formular() {
  const [input, setInput] = useState({ title: "", ingredients: "", preps: "" });

  const updateInput = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sendRecipe = async (e) => {
    console.log("here");
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
  };

  return (
    <div className="formContainer">
      <h2>Teile Dein Lieblingsrezept mit uns:</h2>
      <form onSubmit={(e) => sendRecipe(e)}>
        <input
          type="text"
          name="title"
          placeholder="Rezeptname"
          onChange={(e) => updateInput(e)}
        ></input>

        <textarea
          className="ingredientsField"
          type="text"
          name="ingredients"
          placeholder="Zutaten"
          onChange={(e) => updateInput(e)}
        ></textarea>
        <textarea
          className="prepsField"
          type="text"
          name="preps"
          placeholder="Zubereitung"
          onChange={(e) => updateInput(e)}
        ></textarea>
        <button>Senden</button>
      </form>
    </div>
  );
}
