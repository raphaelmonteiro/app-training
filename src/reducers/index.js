import { combineReducers } from 'redux'

import user from './UserReducer' 
import serieForm from './SerieFormReducer' 

export default combineReducers({
    user,
    serieForm
})