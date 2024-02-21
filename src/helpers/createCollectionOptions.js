export const createOptionsFromArrOfStr = (collection) =>
  collection.map((title) => ({
    value: title,
    label: title,
  }));

export const createOptionsFromArrOfObj = (collection) =>
  collection.map(({ title }) => ({
    value: title,
    label: title,
  }));
