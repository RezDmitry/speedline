import { IEntity } from '../typings/IEntity';

export const selectElementsFromArr = (itemsOnWarehouseFrom: IEntity [], movingItems: IEntity [])
  : [IEntity [], IEntity [], IEntity []] => {
  const remainingMovingItems = [...movingItems];
  const itemsOnWarehouseFromResult: IEntity [] = [];
  const foundedItemsInWarehouseFrom: IEntity [] = [];
  itemsOnWarehouseFrom.forEach((item) => {
    const foundedItemIndex = remainingMovingItems.findIndex((elem) => elem.name === item.name);
    if (foundedItemIndex !== -1) {
      remainingMovingItems.splice(foundedItemIndex, 1);
      foundedItemsInWarehouseFrom.push(item);
    } else {
      itemsOnWarehouseFromResult.push(item);
    }
  });
  return [itemsOnWarehouseFromResult, foundedItemsInWarehouseFrom, remainingMovingItems];
};
