import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import SortMenu from '../../../src/components/ui/SortMenu'

const { shallow, mount } = global.Enzyme

describe("<SortMenu /> UI Component", () => {

    it('Renders correctly', () =>
        compose(expect, toJSON, shallow)(<SortMenu sort="SORTED_BY_TITLE" />).toMatchSnapshot()
    )

    it('Click does not cause error', () => {
        mount(<SortMenu sort="SORTED_BY_TITLE" />)
            .children()
            .childAt(1)
            .simulate('click')
    })

    it('onSelect returns correct option', () => {
        let _select = jest.fn()

        mount(<SortMenu onSelect={_select} />)
            .children()
            .childAt(3)
            .simulate('click')

        expect(_select.mock.calls[0][0]).toBe('SORTED_BY_RATING')
    })
})
