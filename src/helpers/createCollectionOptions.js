export const createOptionsFromArrOfStr = (collection) =>
  collection.map((title) => ({
    value: title,
    label: title,
  }));

export const createOptionsFromArrOfObj = (collection) =>
  collection.map(({ title }) => ({
    value: title,
    label: title,
    // label: t(`GlassType.${title}`),
    // label: t(`GlassType.${title}`, { returnObjects: true }),
  }));

export const createOptionsFromArrOfObjUsingId = (collection) =>
  collection.map(({ title, _id }) => ({
    value: _id,
    label: title,
  }));
