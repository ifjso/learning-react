import IngredientList from "./IngredientsList";
import Instructions from "./Instructions";

const Recipe = ({name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <IngredientList list={ingredients} />
        <Instructions title="조리 절차" steps={steps} />
    </section>;

Recipe.displayName = "Recipe";

export default Recipe;