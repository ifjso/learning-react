import StarRating from '../../../src/components/ui/StarRating'

const { mount } = global.Enzyme

describe("<StarRating /> UI Component", () => {

    let wrapper

    describe("Rendering the UI", () => {

        beforeAll(() => wrapper = mount(<StarRating starsSelected={4} totalStars={7} />))

        it("renders a div with the class .star-rating", () =>
            expect(wrapper.find("div.star-rating").length).toBe(1)
        )

        it("renders the correct number of selected stars", () =>
            expect(wrapper.find("div.star.selected").length).toBe(4)
        )

        it("selects the correct number of stars", () =>
            expect(wrapper.find("div.star").length).toBe(7)
        )

        it("has only one paragraph node", () =>
            expect(wrapper.find("p").length).toBe(1)
        )

        it("displays {rating} of {total} stars", () =>
            expect(wrapper.find("p").text()).toEqual("4 of 7 stars")
        )

        it("rating does not cause error", () => {
            wrapper.children().childAt(4).simulate('click')
        })
    })

    describe("Changing the rating", () => {

        let _rate = jest.fn()

        beforeAll(() => wrapper = mount(<StarRating onRate={_rate} />))
        afterEach(() => _rate.mockReset())

        it("Invokes onRate Function", () => {
            wrapper.children().childAt(4).simulate('click')
            expect(_rate.mock.calls.length).toBe(1)
        })

        it("Passes the correct rating", () => {
            wrapper.children().childAt(3).simulate('click')
            expect(_rate.mock.calls[0][0]).toBe(4)
        })
    })
})
