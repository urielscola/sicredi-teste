import { createSelector } from 'reselect';

export const sortByName = (a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
};

const getList = state => state.dragons.list;

export const getDragonList = createSelector(
  [getList],
  list => list.sort(sortByName)
);
