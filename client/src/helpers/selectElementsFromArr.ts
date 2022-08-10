export const selectElementsFromArr = (targetArray: any [], filterArray: any []): any [] => {
  const tempFilterArray = [...filterArray];
  const result: any [] = [];
  const deleted: any [] = [];
  targetArray.forEach((item) => {
    const index = tempFilterArray.findIndex((elem) => elem.name === item.name);
    if (index !== -1) {
      tempFilterArray.splice(index, 1);
      deleted.push(item);
    } else {
      result.push(item);
    }
  });
  return [result, deleted, tempFilterArray];
};
