export const mealService = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const searchMeals = (keyword) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s={keyword}`)
    .then((res) => res.json())
    .then((data) => data.meal)
    .catch((error) => console.log(error));
