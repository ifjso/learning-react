import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import Color from '../../../src/components/ui/Color'

const { shallow, mount } = global.Enzyme

describe("<Color /> UI Component", () => {

    const shallowExpect = compose(expect, toJSON, shallow)

    it("Renders correct properties", () =>
        shallowExpect(
            <Color title="Test Color" color="#F0F0F0" rating={3} timestamp="Sun Aug 19 2018 20:01:03 GMT+0900 (PDT)"/>
        ).toMatchSnapshot()
    )

    it("Invokes onRemove property", () => {
        mount(<Color title="Test Color" color="#F0F0F0" />)
            .find('button')
            .simulate('click')
    })

    it("Invokes onRate property", () => {
        mount(<Color title="Test Color" color="#F0F0F0" />)
            .find('div.star-rating')
            .childAt(4)
            .simulate('click')
    })
})