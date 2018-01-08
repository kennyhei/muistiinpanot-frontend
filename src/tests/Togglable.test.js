import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Togglable from '../components/Togglable'

describe('<Togglable />', () => {
    let togglableComponent
  
    beforeEach(() => {
        togglableComponent = shallow(
            <Togglable buttonLabel="show...">
                <div class="testDiv" />
            </Togglable>
        )
    })
  
    it('renders its children', () => {
        expect(togglableComponent.contains(<div class="testDiv" />)).to.equal(true)
    })
  
    it('at start the children are not displayed', () => {
        const div = togglableComponent.find('.togglableContent')
        expect(div.getElement().props.style).to.deep.equal({ display: 'none' })
    })
  
    it('after clicking the button, children are displayed', () => {
        const button = togglableComponent.find('button')
    
        button.at(0).simulate('click')
        const div = togglableComponent.find('.togglableContent')
        expect(div.getElement().props.style).to.deep.equal({ display: '' })
    })
  
})
