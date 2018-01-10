import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import jsdom from 'jsdom'
import sinon from 'sinon'
import NoteForm from '../components/NoteForm'

class Wrapper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formInput: ''
        }
    }

    onChange = (e) => {
        this.setState({ formInput: e.target.value })
    }

    render() {
        return (
            <NoteForm
                value={this.state.value}
                onSubmit={this.props.onSubmit}
                handleChange={this.onChange}
            />
        )
    }
}

describe('<NoteForm />', () => {

    it('renders content', () => {

        const onSubmit = sinon.spy()

        const wrapper = mount(
            <Wrapper onSubmit={onSubmit} />
        )

        const input = wrapper.find('input')
        const button = wrapper.find('button')

        input.simulate('change', { target: { value: 'lomakkeiden testaus on hankalaa' } } )
        button.simulate('submit')

        expect(wrapper.state().formInput).to.equal('lomakkeiden testaus on hankalaa')
        sinon.assert.calledOnce(onSubmit)
    })
})
  