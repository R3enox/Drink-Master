import Select from 'react-select';

const optionsCategory = [
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
];
const optionsGlass = [
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
];

export const DrinkPageHero = () => {
  return (
    <>
      <input type="file" name="drinkThumb" required className="block" />
      <div className="flex flex-col gap-[31px] mb-10">
        <input
          type="text"
          name="drink"
          placeholder="Enter item title"
          required
          className="block bg-transparent w-[335px]  border-b border-grey-text-color focus:outline-none focus:border-primary-text-color hover:border-primary-text-color placeholder-grey-text-color placeholder-font-normal placeholder-text-sm "
        />
        <input
          type="text"
          name="description"
          placeholder="Enter about recipe"
          className="block bg-transparent w-[335px]  border-b border-grey-text-color focus:outline-none  focus:border-primary-text-color hover:border-primary-text-color placeholder-grey-text-color placeholder-font-normal placeholder-text-sm "
          required
        />
        <Select
          classNamePrefix="custom_select"
          options={optionsCategory}
          name="category"
          placeholder="Category"
          defaultValue={optionsCategory[0]}
          isRequired={true}
        />
        <Select
          classNamePrefix="custom_select"
          options={optionsGlass}
          name="glass"
          defaultValue={optionsCategory[0]}
          placeholder="Glass"
          isRequired={true}
        />
      </div>
      <div className="mb-20 flex gap-x-3.5">
        <label className="text-grey-text-color checked:text-primary-text-color  flex items-center gap-x-1">
          <input
            type="radio"
            name="alcoholic"
            value="Alcoholic"
            required
            className="form-radio w-5 h-5 bg-transparent"
          />
          Alcoholic
        </label>
        <label className="text-grey-text-color checked:text-primary-text-color  flex items-center gap-x-1">
          <input
            type="radio"
            name="alcoholic"
            value="Non-alcoholic"
            required
            className="form-radio w-5 h-5 bg-transparent "
          />
          Non-alcoholic
        </label>
      </div>
    </>
  );
};
