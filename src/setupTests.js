import { configure } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

let savedItems = {}

const localStorageMock = {
    setItem: (key, item) => {
        savedItem[key] = item
    },

    getItem: (key) => savedItems[key],
    clear: sinon.spy()
}

window.localStorage = localStorageMock
