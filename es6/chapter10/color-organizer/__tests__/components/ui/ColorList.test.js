import ColorList from '../../../src/components/ui/ColorList'

const { mount } = global.Enzyme

jest.mock('../../../src/components/ui/Color', () =>
    ({rating, onRate = f => f}) =>
        <div className="mockColor">
            <button className="rate" onClick={() => onRate(rating)}/>
        </div>
)

describe("<ColorList /> UI Component", () => {
    describe("Rating a Color", () => {
        let _rate = jest.fn()

        beforeAll(() =>
            mount(<ColorList colors={global._testColors} onRate={_rate}/>)
                .find('button.rate')
                .first()
                .simulate('click')
        )

        it("invokes onRate Handler", () => {
            expect(_rate).toBeCalled()
        })

        it("rates the correct color", () => {
            expect(_rate).toBeCalledWith("8658c1d0-9eda-4a90-95e1-8001e8eb6036", 4)
        })
    })
})
