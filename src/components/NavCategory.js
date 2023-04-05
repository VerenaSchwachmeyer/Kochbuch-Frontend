import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function NavCategory({
  categories,
  setCategories,
  setRecipeCatNumber,
}) {
  const basicURL = "http://localhost:3000";

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:8080/");
      const entryItems = await response.json();
      // const cats = entryItems.map((element) => element.name);
      setCategories(entryItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <nav className="Category">
      <h2>Worauf hast Du heute Lust?</h2>
      <ul>
        {categories.map((category, idx) => (
          <li key={category.id}>
            <NavLink
              to={`${basicURL}/category/${category.id}`}
              onClick={() => {
                setRecipeCatNumber({ id: category.id, name: category.name });
              }}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
