import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import jsdom from 'jsdom'
import App from '../App'
import Note from '../components/Note'
import noteService from '../services/notes'

let token = null

const notes = [
  {
    id: "5a451df7571c224a31b5c8ce",
    content: "HTML on helppoa",
    date: "2017-12-28T16:38:15.541Z",
    important: false,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    }
  },
  {
    id: "5a451e21e0b8b04a45638211",
    content: "Selain pystyy suorittamaan vain javascriptiä",
    date: "2017-12-28T16:38:57.694Z",
    important: true,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    }
  },
  {
    id: "5a451e30b5ffd44a58fa79ab",
    content: "HTTP-protokollan tärkeimmät metodit ovat GET ja POST",
    date: "2017-12-28T16:39:12.713Z",
    important: true,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    }
  }
]

/*describe('<App />', () => {

    let app

    before(() => {

        const noteServiceMock = sinon.mock(noteService)
        noteServiceMock.expects('getAll').returns(notes)

        app = mount(<App />)
    })
  
    it('renders all notes it gets from backend', () => {
        app.update()
        const noteComponents = app.find(Note)
        expect(noteComponents.length).to.equal(noteService.notes.length)
    })
})*/



