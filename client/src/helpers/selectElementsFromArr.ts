import { IEntity } from '../typings/IEntity';

export const selectElementsFromArr = (targetArray: IEntity [], filterArray: IEntity [])
  : [IEntity [], IEntity [], IEntity []] => {
  const tempFilterArray = [...filterArray];
  const result: IEntity [] = [];
  const deleted: IEntity [] = [];
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
