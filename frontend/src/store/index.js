import { createStore } from 'redux'

const initialState = {
    cuTopics: [],
    servicesTopics: []
}

export const store = createStore((state = initialState, action) => {
    switch(action.type){
        case 'SET_TOPICS':
            return {
                ...state,
                cuTopics: action.payload
            }
            
        case 'SET_TOPICS_SERVICES': 
            return {
                ...state,
                servicesTopics: action.payload
            }
        default:
             return state
    }
}) 