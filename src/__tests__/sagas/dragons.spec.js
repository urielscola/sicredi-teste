import { runSaga } from 'redux-saga';
import {
  getDragons,
  getDragonDetail,
  createDragon,
  updateDragon,
  deleteDragon
} from '../../store/sagas/dragons';
import { Creators as DragonsActions } from '../../store/ducks/dragons';
import mockApi from '../../__mocks__/api';

const BASE_API_URL = `${process.env.REACT_APP_API_URL}dragon`;

describe('Dragons Sagas', () => {
  it('Should handle getDragons saga', async () => {
    const dispatched = [];

    mockApi.onGet(BASE_API_URL).reply(200, {
      data: ['Dragon']
    });

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getDragons
    ).toPromise();

    expect(dispatched[0]).toEqual(
      DragonsActions.getDragonsSuccess({ data: ['Dragon'] })
    );
  });

  it('Should handle getDragons error saga', async () => {
    const dispatched = [];

    mockApi.onGet(BASE_API_URL).networkError();

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getDragons
    ).toPromise();

    expect(dispatched[0]).toEqual(DragonsActions.getDragonsFailure());
  });

  it('Should handle getDragonDetail saga', async () => {
    const dispatched = [];
    const payload = '42';
    const response = {
      data: { name: 'Dragon' }
    };
    mockApi.onGet(`${BASE_API_URL}/${payload}`).reply(200, response);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getDragonDetail,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(
      DragonsActions.getDragonDetailSuccess(response)
    );
  });

  it('Should handle getDragonDetail error saga', async () => {
    const dispatched = [];
    const payload = '42';

    mockApi.onGet(`${BASE_API_URL}/${payload}`).networkError();

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getDragonDetail,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(DragonsActions.getDragonDetailsFailure());
  });

  it('Should handle createDragon saga', async () => {
    const dispatched = [];
    const payload = { name: 'Dragon' };
    mockApi.onPost(`${BASE_API_URL}`).reply(201, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      createDragon,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(DragonsActions.getDragons());
  });

  it('Should handle createDragon error saga', async () => {
    const dispatched = [];
    const payload = { name: 'Dragon' };

    mockApi.onPost(`${BASE_API_URL}`).networkError();

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      createDragon,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(DragonsActions.getDragonDetailsFailure());
  });

  it('Should handle updateDragon saga', async () => {
    const dispatched = [];
    const id = '47';
    const payload = { data: { name: 'Dragon' }, id };

    mockApi.onPut(`${BASE_API_URL}/${id}`).reply(200, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      updateDragon,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(DragonsActions.getDragons());
  });

  it('Should handle updateDragon error saga', async () => {
    const dispatched = [];
    const id = '47';
    const payload = { data: { name: 'Dragon' }, id };

    mockApi.onPut(`${BASE_API_URL}/${id}`).networkError();

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      updateDragon,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(DragonsActions.getDragonDetailsFailure());
  });

  it('Should handle deleteDragon saga', async () => {
    const dispatched = [];
    const payload = '47';

    mockApi.onDelete(`${BASE_API_URL}/${payload}`).reply(200, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      deleteDragon,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(DragonsActions.getDragons());
  });

  it('Should handle deleteDragon error saga', async () => {
    const dispatched = [];
    const payload = '47';

    mockApi.onDelete(`${BASE_API_URL}/${payload}`).networkError();

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      deleteDragon,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(DragonsActions.getDragonDetailsFailure());
  });
});
