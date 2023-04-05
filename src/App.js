import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavCategory from "./components/NavCategory";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import BackButton from "./components/BackButton";
import Formular from "./components/Formular";
import "./style.scss";

function App() {
  const [categories, setCategories] = useState([]);
  const [recipeCatNumber, setRecipeCatNumber] = useState();
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Koch Dir was!</h1>
      </header>
      <SearchBar
        setRecipeCatNumber={setRecipeCatNumber}
        recipes={recipes}
        setRecipes={setRecipes}
      />
      <NavCategory
        categories={categories}
        setCategories={setCategories}
        setRecipeCatNumber={setRecipeCatNumber}
      />

      <Routes>
        <Route path="/" element={""} />
        <Route
          path="/search"
          element={
            <Recipes
              number={recipeCatNumber}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <Recipes
              number={recipeCatNumber}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          }
        />
      </Routes>

      <Formular />
      <BackButton />
      <Footer />
    </div>
  );
}

export default App;

// https://www.contentful.com/developers/docs/javascript/tutorials/typescript-in-javascript-client-library
// https://contentful.github.io/contentful.js/contentful/9.1.18/index.html

// ----- TABLE Catagory --------------------------------

/*
	// version2: onClick - category Name für Filter übergeben 

	const resipeFiltr = (categ) => {
		console.log(categ);
	}

	return (
	  <div className="Category">
		 <h2>Category</h2>
		 <ul>
			{categories.map((category, idx) => (
				<li key={idx} onClick={() => resipeFiltr(category.fields.cateName)}>
						<h3>{category.fields.cateName}</h3>
				</li>
		 ))}
		 </ul>
	  </div>
	);
 */

// ----- TABLE Catagory with reference TABLE recipe ----------------------------

// function RecipesInCategory() {
//   const { cate_name = "Top bewertet" } = useParams(); // "/category/:cate_name" | defaullt value 'Top bewertet'
//   const [recipesInCat, setRecipesInCat] = useState([]);

//   console.log("cate_name: ", cate_name);

/* 
		https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
		Getting Started with Contentful and JavaScript

		// Retrieve entries with search parameters
		// You can filter by properties of your entries
		// When you filter by the value of a field, you need to include which field 'fields.sku': you are filtering 

		client.getEntries({
			'fields.sku': '<sku_value>',
			content_type: '<product_content_type_id>',
  		})

		in url: ...content_type=[id]&fields.restaurantField.sys.id=[id]


		--1--  all entries of a space - items[ {},{}..] - all items - all categorie und all resipes 
		client.getEntries().then( (response) => console.log(response.items) )
		
		--2--  all category Entries - items[ {},{}..] - only category items
		client.getEntries( {content_type: 'category'} ).then( (response) => console.log(response.items) )
		
		--3--  
		client.getEntry('<entry_id>'); // category Japan Entry - <entry_id> for Japan == '71FDi60hjwSLR72uTxBN7R'
			Category -> Italy -> Edit -> Info -> id ...
			? "fields" -> "reference_field" -> "sys" -> "id"

		--4-- one category with reference recipes array 
		client.getEntries( {
			content_type: 'category',
			'fields.cateName': cate_name
		});

	*/

// const getData = async () => {
// 1- const entryItem = await client.getEntries(); // all entries of a space - items[ {},{}..] - categorie und resipes
// 2- const entryItem = await client.getEntries({content_type: 'category'}); // only category items

// 3- const entryItem = await client.getEntry('71FDi60hjwSLR72uTxBN7R'); // category Japan Entry
// 	console.log("TEST getEntry('<entry_id>'): ", entryItem.fields.cateName);

// 4- filter category by name. It's category with recipes array from reference table "recipe"
// const entryItem = await client.getEntries({
//   content_type: "category",
//   "fields.cateName": cate_name,
// });

//   const recipesInCategory = entryItem.items[0].fields.cateRecipes; // recipes array in one category
//   console.log("TEST resipesInCategory: ", recipesInCategory);

//   setRecipesInCat(recipesInCategory);
// };

// useEffect(() => {
//   // console.log(process.env.REACT_APP_SPACE_ID);
//   // console.log(process.env.REACT_APP_CONTENT_DELIVERY_API);
//   getData();
// }, [cate_name]);

// return (
//   <section>
//     <h2>Hier unsere Vorschläge für {cate_name}-Rezepte:</h2>
//     <div className="Recipes">
//       {" "}
//       Hello World
{
  /* {recipesInCat?.map((recipe, idx) => (
          <div key={idx} className="cardRecipe">
            <h3>{recipe.fields.reciName}</h3>
            <img src={recipe.fields.reciImage.fields.file.url} alt="bild" />
            <ul>
              {recipe.fields.reciIngredients.map((el, idx) => {
                return <li key={idx}>{el}</li>;
              })}
            </ul>
          </div>
        ))} */
}
{
  /* </div>
    </section>
  );
} */
}

/*		Dokumentation

		content_type - consists of a set of fields and other information
		client.getContentTypes() - Get the content model of a space
		client.getContentType('<content_type_id>') - Get a single content type

		Category -> Italy -> Edit -> Info -> id ...
		"fields" -> "reference_field" -> "sys" -> "id"
		
		Links to a specific item
	
		client.getEntries({
			content_type: '<content_type_id>',
			'fields.<field_name>[all]': 'flowers,accessories'
			})
		})
*/

// ----- old TABLE: Catagory + reference Recipes  --------------------------------
//  <all catagory>.map()  -> <every category>.map

// function CategoryRecipe() {
//   const [catResipes, setCatResipes] = useState([]);

//   const contentType = "category"; //

//   const getDataCat = async (contType) => {
//     const entryItems = await client.getEntries({ content_type: contType });
//     console.log("CAT_RECIPES:", entryItems.items);
//     setCatResipes(entryItems.items);
//   };

//   useEffect(() => {
// console.log(process.env.REACT_APP_SPACE_ID);
// console.log(process.env.REACT_APP_CONTENT_DELIVERY_API);
// getDataCat(contentType);
// console.log(catResipes.map( (element) => (element.fields.cateRecipes)?.map((el) => console.log(el.fields.reciName))))
// }, []);

// return (
//   <div className="Recipes">
//     {/* {
// catResipes.map( (element) => (element.fields.cateRecipes)?.map((el, idx) => (<p key={idx}>{el.fields.reciName}</p>)))
// cateRecipes)?.map  - für den Fall wenn array cateRecipes nicht existiert ist - category ohne Rezepts z.B. "All" -
// - zu vermeiden "Uncaught TypeError: Cannot read properties of undefined (reading 'map')"

//         catResipes.map((element) =>
//           element.fields.cateRecipes?.map((recipe, idx) => (
//             <div key={idx}>
//               <h3>{recipe.fields.reciName}</h3>
//               <img src={recipe.fields.reciImage.fields.file.url} alt="bild" />
//               <ul>
//                 {recipe.fields.reciIngredients.map((el, idx) => {
//                   return <li key={idx}>{el}</li>;
//                 })}
//               </ul>
//             </div>
//           ))
//         )
//       } */}
//     </div>
//   );
// }

// ----- old TABLE Resipes: alle Rezepten --------------------------------

// function Recipes() {
//   const [recipes, setRecipes] = useState([]);

//   const contentType = "recipe"; //

// const getData = async (contType) => {
//   const entryItems = await client.getEntries({
//     content_type: contType,
//   });

//   console.log("ENTRIES: ", entryItems.items);
//   setRecipes(entryItems.items);
// };

// useEffect(() => {
// console.log(process.env.REACT_APP_SPACE_ID);
// console.log(process.env.REACT_APP_CONTENT_DELIVERY_API);
//   getData(contentType);
// }, []);

//   return (
//     <div className="Recipes">
//       {recipes.map((recipe, idx) => (
//         <div key={idx}>
//           <h3>{recipe.fields.reciName}</h3>
//           <img src={recipe.fields.reciImage.fields.file.url} alt="bild" />
//           <ul>
//             {recipe.fields.reciIngredients.map((el, idx) => {
//               return <li key={idx}>{el}</li>;
//             })}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
