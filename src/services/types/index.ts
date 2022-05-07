import { ReduxStore } from '../storage'
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type TRootState = ReturnType<typeof ReduxStore.getState>;
// export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, TRootState>>;
// export type AppDispatch = Dispatch<TAppActions>;