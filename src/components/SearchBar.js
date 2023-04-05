import { useState } from "react";
import Recipes from "./Recipes";
import { Link } from "react-router-dom";

export default function Searchbar({ setRecipeCatNumber, recipes, setRecipes }) {
  const [searchText, setSearchText] = useState("");
  const [found, setFound] = useState(true);

  const findRecipes = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/search?text=${searchText}`
      );
      const entryItems = await response.json();
      // const recipes = entryItems.map((element) => element.name);
      if (entryItems.length === 0) {
        setFound(false);
      } else {
        setFound(true);
      }
      setRecipes(entryItems);
      setRecipeCatNumber();
      setSearchText("");
    } catch (error) {
      console.log(error);
      setFound(false);
    }
  };

  return (
    <section className="searchBar">
      <form
        onSubmit={(e) => {
          findRecipes(e);
        }}
      >
        <Link to={`http://localhost:3000/search`}>
          <input
            type="text"
            placeholder="Suche in unseren Rezepten..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="button"
            onClick={(e) => {
              findRecipes(e);
            }}
          >
            {" "}
            Los!
          </button>
        </Link>
      </form>

      {/* {recipes && (
        <Recipes
          number={recipeCatNumber}
          recipes={recipes}
          setRecipes={setRecipes}
        />
      )} */}
      {!found && <h3>{`Wir konnten für Deine Suche leider nichts finden.`}</h3>}
    </section>
  );
}
