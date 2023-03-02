import { searchMeals } from "./meal.service";

export const setUpSearch = (el) => {
  const form = document.querySelector(el);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  searchMeals(e.target.elements)
};
