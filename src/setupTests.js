import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import jsdom from 'jsdom'

configure({ adapter: new Adapter() })

// Makes mount work for enzyme but breaks other tests!
/*const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView*/