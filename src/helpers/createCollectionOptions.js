import { nanoid } from 'nanoid';

export const createOptionsFromArrOfStr = (collection, t, collectionName) =>
  collection.map((title) => ({
    value: title,
    label: t(`${collectionName}.${title}`),
  }));

export const createOptionsFromArrOfObj = (collection, t, collectionName) =>
  collection.map(({ title }) => ({
    value: title,
    label: t(`${collectionName}.${title}`),
  }));

export const createOptionsFromArrOfObjUsingId = (
  collection,
  t,
  collectionName
) =>
  collection.map(({ title, _id }) => ({
    value: _id,
    label: t(`${collectionName}.${title}`),
    enTitle: title,
  }));

export const setInitialIngredientOptions = (collection, quantity) => {
  const initialOptions = [];

  for (let i = 0; i < quantity; i++) {
    const randomIndex = Math.floor(Math.random() * collection.length);

    initialOptions.push({
      ...collection[randomIndex],
      id: nanoid(),
      hasPlaceholder: true,
    });
  }

  return initialOptions;
};
