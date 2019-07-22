export const createReducer = ( initialSate = {}, actionHandlerKeyFuncs = {}) => {
    return (state = initialSate, action) => {
        const actionHandler = actionHandlerKeyFuncs[action.type];
        return actionHandler ? actionHandler(state, action) : state;
    }
};

// create am action 
const crateAction  = (type, actionprops) => {
    return {
        type,
        ...actionprops
    }
}

export const createAsyncActionCreator = (actionType, actionFunction, reqParams) => {

    return (dispatch) => {
        // action type = START, ERROR, SUCCESS
        dispatch(crateAction(`${actionType}_START`, {request : reqParams}));

        return actionFunction(reqParams)
                        .then(response => {
                            response.json()
                                .then(json => dispatch(crateAction(`${actionType}_SUCCESS`, {response : json})))
                                .catch(error => dispatch(crateAction(`${actionType}_ERROR`, {error})))
                        });
    };
}

const initialAsyncState = { isLoading: false, response: null, request: null };


export const createAsyncReducer = (actionType , actionHandlerKeyFuncs = {}, initialSate = initialAsyncState)=> {

    const startReducerFn = (state, action) => ({
        ...state,
        isLoading: true,
        request : action.request
    });

    const successReducerFn = ( state, action ) => ({
        ...state,
        isLoading: false,
        response: action.response
    });

    const errorReducerFn = ( state, action ) => ({
        ...state,
        isLoading: false,
        error: action.error
    });

    return createReducer(
        initialSate,
        {
            [`${actionType}_START`] : startReducerFn,
            [`${actionType}_SUCCESS`] : successReducerFn,
            [`${actionType}_ERROR`] : errorReducerFn,
            ...actionHandlerKeyFuncs
        }
    )
}

