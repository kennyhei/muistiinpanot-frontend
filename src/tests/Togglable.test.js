import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import Note from '../components/Note'
import Togglable from '../components/Togglable'
import jsdom from 'jsdom'

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

    it('mount renders all components', () => {

        const note1 = {
            content: 'Komponenttitestaus tapahtuu mochalla ja enzymellä',
            important: true
        }

        const note2 = {
            content: 'mount renderöi myös alikomponentit',
            important: true
        }

        const shallowNoteComponent = shallow(
            <Togglable buttonLabel="show...">
                <Note note={note1}/>
                <Note note={note2}/>
            </Togglable>
        )

        const mountNoteComponent = mount(
            <Togglable buttonLabel="show...">
                <Note note={note1}/>
                <Note note={note2}/>
            </Togglable>
        )

        //console.log(mountNoteComponent.debug())
        //console.log(mountNoteComponent.html())

        expect(shallowNoteComponent.html()).to.not.deep.equal(mountNoteComponent.html())
    })
})
