import { ActivityTypeKeys } from '../actions/activity'

export interface IActivityState {
  activities?: String[]
  getActivitiesListIsFetching: boolean
  getActivitiesListIsError?: string
}

const activityStateDefault: IActivityState = {
  getActivitiesListIsFetching: false
}

export function activity(
  state: IActivityState = activityStateDefault,
  action: any
): IActivityState {
  switch (action.type) {
    case ActivityTypeKeys.ACTIVITIES_LIST_FETCHING:
      return {
        ...state,
        getActivitiesListIsFetching: true,
        getActivitiesListIsError: undefined
      }

    case ActivityTypeKeys.ACTIVITIES_LIST_SUCCESS:
      return {
        ...state,
        getActivitiesListIsFetching: false,
        getActivitiesListIsError: undefined,
        activities: action.activities
      }

    case ActivityTypeKeys.ACTIVITIES_LIST_ERROR:
      return {
        ...state,
        getActivitiesListIsFetching: false,
        getActivitiesListIsError: action.error
      }

    default:
      return state
  }
}
