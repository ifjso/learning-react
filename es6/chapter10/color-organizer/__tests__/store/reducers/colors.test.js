import deepFreeze from 'deep-freeze'
import C from '../../../src/constants'
import { colors } from '../../../src/store/reducers'

describe("colors Reducers", () => {
    it("ADD_COLOR success", () => {
        const state = [
            {
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 3
            }
        ]

        const action = {
            type: C.ADD_COLOR,
            id: 1,
            title: 'Bright White',
            color: '#FFFFFF',
            timestamp: new Date().toString()
        }
        
        deepFreeze(state)
        deepFreeze(action)

        const results = colors(state, action)
        expect(results)
            .toEqual([
                {
                    id: 0,
                    title: 'Test Teal',
                    color: '#90C3D4',
                    timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                    rating: 3
                },
                {
                    id: 1,
                    title: 'Bright White',
                    color: '#FFFFFF',
                    timestamp: action.timestamp,
                    rating: 0
                }
            ])
    })
})

