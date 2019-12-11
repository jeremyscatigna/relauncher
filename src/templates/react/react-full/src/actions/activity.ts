import { KThunkAction } from './helpers'

export enum ActivityTypeKeys {
  ACTIVITIES_LIST_FETCHING = 'ACTIVITIES_LIST_FETCHING',
  ACTIVITIES_LIST_SUCCESS = 'ACTIVITIES_LIST_SUCCESS',
  ACTIVITIES_LIST_ERROR = 'ACTIVITIES_LIST_ERROR'
}

export type ActivityActions =
  | IActivitiesListFetchingAction
  | IActivitiesListSuccessAction
  | IActivitiesListErrorAction

// GET ACTIVITIES LIST
export interface IActivitiesListFetchingAction {
  type: ActivityTypeKeys.ACTIVITIES_LIST_FETCHING
}

export interface IActivitiesListSuccessAction {
  type: ActivityTypeKeys.ACTIVITIES_LIST_SUCCESS
  activities: String[]
}

export interface IActivitiesListErrorAction {
  type: ActivityTypeKeys.ACTIVITIES_LIST_ERROR
  error: string
}

export function activitiesListFetching(): IActivitiesListFetchingAction {
  return {
    type: ActivityTypeKeys.ACTIVITIES_LIST_FETCHING
  }
}

export function activitiesListSuccess(activities: IActivity[]): IActivitiesListSuccessAction {
  return {
    type: ActivityTypeKeys.ACTIVITIES_LIST_SUCCESS,
    activities
  }
}

export function activitiesListError(error: string): IActivitiesListErrorAction {
  return {
    type: ActivityTypeKeys.ACTIVITIES_LIST_ERROR,
    error
  }
}

export function doGetActivitiesList(): KThunkAction {}
