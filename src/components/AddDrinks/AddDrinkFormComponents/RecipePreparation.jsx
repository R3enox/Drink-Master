import { AddDrinkTitle } from './AddDrinkTitle';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const RecipePreparation = () => {
  const { t} = useTranslation();
  return (
    <>
      <AddDrinkTitle text={t('title.AddDrinkRecepy')} />
      <textarea
        className="bg-transparent border-[1px] resize-none border-grey-text-color focus:outline-none
         focus:border-primary-text-color hover:border-primary-text-color w-[335px] h-[184px] rounded-[14px] 
         placeholder-grey-text-color placeholder-font-normal placeholder-text-sm 
         mb-5 pl-[18px] md:pl-[24px] pt-4 md:pt-[14px] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]  
         md:w-[480px] md:rounded-[20px] 
        "
        name="instructions"
        id=""
        cols="30"
        rows="10"
        placeholder={t('inputPlaceholder.DrinkPageHero.recipe')}
        required
      ></textarea>
    </>
  );
};
