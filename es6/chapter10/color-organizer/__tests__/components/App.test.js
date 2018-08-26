import App from '../../src/components/App'
import { Colors } from '../../src/components/containers'

jest.mock("../../src/components/containers")

describe("<App /> Root Component", () => {
    it("renders correctly", () => {
        console.log(Colors)
        expect(App().props.children.length).toBe(3)
    })
})
