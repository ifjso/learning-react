import Expandable from '../../../src/components/HOC/Expandable'

const { mount } = global.Enzyme

describe("Expandable Higher Oder Component", () => {
    let props,
        wrapper,
        ComposedComponent,
        MockComponent = ({collapsed, expandCollapse}) =>
            <div onClick={expandCollapse}>
                {(collapsed) ? 'collapsed' : 'expanded'}
            </div>

    describe("Rendering UI", () => {
        beforeAll(() => {
            ComposedComponent = Expandable(MockComponent)
            wrapper = mount(<ComposedComponent foo="foo" gnar="gnar"/>)
            props = wrapper.find(MockComponent).props()
        })

        it("Starts off Collapsed", () => expect(props.collapsed).toBe(true))

        it("Passes the expandCollapse function to composed component", () =>
            expect(typeof props.expandCollapse).toBe('function')
        )

        it("Passes additional foo prop to composed component", () =>
            expect(props.foo).toBe('foo')
        )

        it("Passes additional gnar prop to composed component", () =>
            expect(props.gnar).toBe('gnar')
        )
    })

    describe("Expand Collapse Functionality", () => {
        let instance

        beforeAll(() => {
            ComposedComponent = Expandable(MockComponent)
            wrapper = mount(<ComposedComponent hidden={false}/>)
            instance = wrapper.instance()
        })

        it("render the MockComponent as the root element", () => {
            expect(wrapper.first().is(MockComponent))
        })

        it("starts off expanded", () =>
            expect(instance.state.collapsed).toBe(false)
        )

        it("toggles the collapsed state", () => {
            instance.expandCollapse()
            expect(instance.state.collapsed).toBe(true)
        })
    })
})
