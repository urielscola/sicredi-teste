import dragonsReducer, {
  Creators as DragonsActions,
  INITIAL_STATE
} from '../../store/ducks/dragons';

describe('Dragons Reducer', () => {
  it('Should be able to handle getDragons', () => {
    const state = dragonsReducer(INITIAL_STATE, DragonsActions.getDragons());

    expect(state.loading).toBe(true);
  });

  it('Should be able to handle getDragonsSuccess', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.getDragonsSuccess(JSON.stringify(['Dragon']))
    );

    expect(state.loading).toBe(false);
    expect(state.list).toBe(JSON.stringify(['Dragon']));
  });

  it('Should be able to handle getDragonsFailure', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.getDragonsFailure()
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
  });

  it('Should be able to handle getDragonDetail', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.getDragonDetail()
    );

    expect(state.loading).toBe(true);
  });

  it('Should be able to handle getDragonDetailSuccess', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.getDragonDetailSuccess(JSON.stringify({ name: 'Dragon' }))
    );

    expect(state.loading).toBe(false);
    expect(state.detail).toBe(JSON.stringify({ name: 'Dragon' }));
  });

  it('Should be able to handle getDragonDetailsFailure', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.getDragonDetailsFailure()
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
  });

  it('Should be able to handle setDragonDetail', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.setDragonDetail(JSON.stringify({ name: 'Dragon' }))
    );

    expect(state.detail).toBe(JSON.stringify({ name: 'Dragon' }));
  });

  it('Should be able to handle updateDragon', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.updateDragon(JSON.stringify({ name: 'Dragon' }))
    );

    expect(state).toBe(INITIAL_STATE);
  });

  it('Should be able to handle createDragon', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.createDragon(JSON.stringify({ name: 'Dragon' }))
    );

    expect(state).toBe(INITIAL_STATE);
  });

  it('Should be able to handle deleteDragon', () => {
    const state = dragonsReducer(
      INITIAL_STATE,
      DragonsActions.deleteDragon(57)
    );

    expect(state).toBe(INITIAL_STATE);
  });
});
