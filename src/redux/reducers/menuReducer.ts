import {genresDataExample} from "../../helpers/exampleDatas";
import {IState} from "../../helpers/interfaces";

const types = {
    setActiveMenuIndex: 'setActiveMenuIndex',
    setActiveMovieCard: 'setActiveMovieCard',
    setIsMenuActive: 'setIsMenuActive'
}

const initState = {
    activeMenuIndex: genresDataExample.length - 1,
    isMenuActive: true,
    activeMovieCard: 0
}

interface IAction {
    type: string,
    payload: IState
}
const menuReducer = (state= initState, action: IAction) => {
    switch (action.type) {
        case types.setActiveMenuIndex: {
            return {
                ...state,
                activeMenuIndex: action.payload
            }
        }
        case types.setActiveMovieCard: {
            return {
                ...state,
                activeMovieCard: action.payload
            }
        }
        case types.setIsMenuActive: {
            return {
                ...state,
                isMenuActive: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const setActiveMenuIndex = (payload: number) => ({
    type: types.setActiveMenuIndex,
    payload
})

export const setActiveMovieCard = (payload: number) => ({
    type: types.setActiveMovieCard,
    payload
})

export const setIsMenuActive = (payload: boolean) => ({
    type: types.setIsMenuActive,
    payload
})

export default menuReducer
