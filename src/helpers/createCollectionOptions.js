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
  }));
