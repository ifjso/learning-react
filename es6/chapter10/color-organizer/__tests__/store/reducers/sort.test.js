import deepFreeze from 'deep-freeze'
import C from '../../../src/constants'
import { sort } from '../../../src/store/reducers'

describe("sort Reducer", () => {
    it("sort success", () => {
        const state = {}

        const action = {
            type: C.SORT_COLORS,
            sortBy: "SORTED_BY_TITLE"
        }

        deepFreeze(state)
        deepFreeze(action)

        expect(sort(state, action)).toEqual("SORTED_BY_TITLE")
    })

    it("defaults to SORTED_BY_DATE", () => expect(sort()).toEqual("SORTED_BY_DATE"))
})