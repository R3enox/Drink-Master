const RecipePreparation = ({ description }) => {
  return (
    <>
      <h2>Recipe Preparation</h2>
      <p>{description && description.instructionsUK}</p>
      <img src="" alt="" />
    </>
  );
};

export default RecipePreparation;
