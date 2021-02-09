import { RespApi } from '@models*';
import { createAction, props } from '@ngrx/store';

export const isLoading = createAction('[UI] IsLoading');
export const stopLoading = createAction('[UI] StopLoading');
export const errorAPI = createAction('[UI] Error API', props<{ error: RespApi }>());
export const messageAPI = createAction('[UI] Message API', props<{ message: string }>());
