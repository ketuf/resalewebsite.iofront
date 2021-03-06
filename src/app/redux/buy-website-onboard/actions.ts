import { createAction, props } from '@ngrx/store';
import { IActionCreator, IBuyWebsiteOnboardFetch } from '../combiner';
export const RDX_BUY_WEBSITE_ONBOARD_FETCH  = 'RDX_BUY_WEBSITE_ONBOARD_FETCH';
export const rdxBuyWebsiteOnboardFetch = createAction(RDX_BUY_WEBSITE_ONBOARD_FETCH, props<IActionCreator<IBuyWebsiteOnboardFetch>>())
export const RDX_BUY_WEBSITE_ONBOARD_FETCH_SUCCESS = 'RDX_BUY_WEBSITE_ONBOARD_FETCH_SUCCESS';
export const rdxBuyWebsiteOnboardFetchSuccess = createAction(RDX_BUY_WEBSITE_ONBOARD_FETCH_SUCCESS, props<IActionCreator<string>>());
export const RDX_BUY_WEBSITE_ONBOARD_FETCH_ERROR = 'RDX_BUY_WEBSITE_ONBOARD_FETCH_ERROR';
export const rdxBuyWebsiteOnboardFetchError = createAction(RDX_BUY_WEBSITE_ONBOARD_FETCH_ERROR, props<IActionCreator<string>>());

export const RDX_BUY_WEBSITE_ONBOARD_IS_FETCH_SUCCESS_MESSAGE_TRUE = 'RDX_BUY_WEBSITE_ONBOARD_IS_FETCH_SUCCESS_MESSAGE_TRUE';
export const rdxBuyWebsiteOnboardISFetchSuccessMessageTrue = createAction(RDX_BUY_WEBSITE_ONBOARD_IS_FETCH_SUCCESS_MESSAGE_TRUE, props<IActionCreator<any>>());
