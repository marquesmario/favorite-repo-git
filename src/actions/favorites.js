export const addFavoriteRequest = repository =>({
    type: 'ADD_FAVORITE_RESQUEST',
    payload: { repository },
})

export const addFavoriteSuccess = data =>({
    type: 'ADD_FAVORITE_SUCCESS',
    payload: { data },
})