import { useState, useEffect } from "react";

export default function Recipes({ number, recipes, setRecipes }) {
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/category/${number.id}`
      );
      const entryItems = await response.json();
      // const recipes = entryItems.map((element) => element.name);
      setRecipes(entryItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (number) {
      getRecipes();
    }
  }, [number]);

  return (
    <section>
      {number && <h2>{` ${number.name}e Rezepte:`}</h2>}
      <div className="Recipes">
        {recipes?.map((item) => {
          const listOfIng = item.ingredients.split(",");
          return (
            <div key={item.id} className="cardRecipe">
              <h3>{item.name}</h3>
              <img
                src={item.image}
                alt={`Zubereitungsvorschlag für ${item.name}`}
              ></img>
              <ul>
                {listOfIng.map((el, idx) => {
                  return <li key={idx}>{el}</li>;
                })}
              </ul>
              <h4>Zubereitung:</h4>
              <p>{item.preparations}</p>
            </div>
          );
        })}
        {/* <img src={recipe.fields.reciImage.fields.file.url} alt="bild" /> */}
      </div>
    </section>
  );
}
