import C from '../../src/constants'
import storeFactory from '../../src/store'

describe("Store Factory", () => {

    beforeAll(() => {
        global.localStorage = {}
        console.groupCollapsed = jest.fn()
        console.log = jest.fn()
        console.groupEnd = jest.fn()
    })

    afterEach(() => jest.resetAllMocks())

    describe("Logging", () => {
        let store

        beforeEach(() => {
            store = storeFactory({
                colors: [global._testColors[0]]
            })
            store.dispatch({
                type: C.REMOVE_COLOR,
                id: "8658c1d0-9eda-4a90-95e1-8001e8eb6036"
            })
        })

        it("starts a console gruop", () =>
            expect(console.groupCollapsed.mock.calls.length).toBe(1)
        )

        it("logs state before action and state after", () =>
            expect(console.log.mock.calls.map(arg => arg[0]))
                .toEqual([
                    "prev state",
                    "action",
                    "next state"
                ])
        )

        it("ends the console group", () => 
            expect(console.groupEnd.mock.calls.length).toBe(1)
        )
    })

    describe("Saving", () => {
        let store

        beforeEach(() => {
            global.localStorage.clear()
            store = storeFactory({})
            store.dispatch({
                type: C.ADD_COLOR,
                id: 0,
                title: 'test color',
                color: '#000000',
                timestamp: 'none',
                rating: 0
            })
        })

        it("saves state to localStorage", () =>
            expect(JSON.parse(global.localStorage['redux-store']).colors.length).toBe(1)
        )
    })

    it("creates a store when default state is not supplied", () => {
        expect(storeFactory().getState().colors).toBeInstanceOf(Array)
    })
})