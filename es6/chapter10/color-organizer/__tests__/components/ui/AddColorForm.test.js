import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import AddColorForm from '../../../src/components/ui/AddColorForm'

const { shallow, mount } = global.Enzyme

describe("<AddColorForm /> UI Component", () => {

    let wrapper

    describe("Rendering UI", () => {

        it("renders correctly", () =>
            compose(expect, toJSON, shallow)(<AddColorForm />).toMatchSnapshot()
        )

        it("Submitting default onNewColor does not cause error", () => {
            wrapper = mount(<AddColorForm />)
            wrapper.find('input[type="text"]').instance().value = 'test-color'
            wrapper.find('input[type="color"]').instance().value = '#0000FF'
            wrapper.find('form').simulate('submit')
        })
    })

    describe("Adding New Colors", () => {

        const _addColor = jest.fn()

        beforeAll(() => {
            wrapper = mount(<AddColorForm onNewColor={_addColor}/>)
            wrapper.find('input[type="text"]').instance().value = 'test-color'
            wrapper.find('input[type="color"]').instance().value = '#0000ff'
            wrapper.find('form').simulate('submit')
        })

        it("add color correctly", () =>
            expect(_addColor).toBeCalledWith('test-color', '#0000ff')
        )

        it("resets the title value", () =>
            expect(wrapper.find('input[type="text"]').instance().value).toBe('')
        )

        it("resets the color value", () =>
            expect(wrapper.find('input[type="color"]').instance().value).toBe('#000000')
        )
    })
})
