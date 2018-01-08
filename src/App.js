import React from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'
import noteService from './services/notes'
import loginService from './services/login'
import Togglable from './components/Togglable'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            new_note: 'uusi',
            showAll: true,
            error: null,

            // Login data
            username: '',
            password: '',
            user: null
        }
    }

    componentWillMount = () => {
        noteService.getAll().then( notes => this.setState({ notes }) )

        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            this.setState({ user })
            noteService.setToken(user.token)
        }
    }

    addNote = (e) => {
        e.preventDefault()

        const noteObject = {
            content: this.state.new_note,
            date: new Date(),
            important: Math.random() > 0.5,
        }

        noteService.create(noteObject).then(newNote => {
            this.setState({
                notes: this.state.notes.concat(newNote),
                new_note: ''
            })

            this.noteForm.toggleVisibility()
        })
    }

    toggleImportance = (id) => {
        return () => {
            const note = this.state.notes.find(note => note.id === id)
            const changedNote = { ...note, important: !note.important }

            noteService.update(id, changedNote)
                       .then(note => {
                           const notes = this.state.notes.filter(n => n.id !== id)
                           this.setState({ notes: notes.concat(note) })
                       })
                       .catch(error => {
                           this.setState({
                               notes: this.state.notes.filter(n => n.id !== id),
                               error: `Muistiinpano "${note.content}" on jo valitettavasti poistettu palvelimelta`
                            })

                            setTimeout(() => {
                                this.setState({ error: null })
                            }, 5000)
                       })
        }
    }

    login = async (e) => {
        e.preventDefault()
        console.log('login with', this.state.username, this.state.password)

        try {
            const user = await loginService.login({
                username: this.state.username,
                password: this.state.password
            })

            console.log(user)

            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            noteService.setToken(user.token)
            this.setState({ username: '', password: '', user })

        } catch (error) {
            this.setState({ error: 'Käyttäjätunnus tai salasana virheellinen' })

            setTimeout(() => {
                this.setState({ error: null})
            }, 5000)
        }
    }

    logout = (e) => {
        window.localStorage.removeItem('loggedUser')
        noteService.setToken(null)
        this.setState({ user: null })
    }

    handleNoteChange = (e) => {
        this.setState({ new_note: e.target.value })
    }

    handleLoginFieldChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleVisible = () => this.setState({ showAll: !this.state.showAll })

    render() {
        const byId = (note1, note2) => note1.id < note2.id ? -1 : 1
        const notesToShow = this.state.showAll ?
                            this.state.notes :
                            this.state.notes.filter( note => note.important )

        const items = notesToShow.sort(byId).map( note => <Note key={note.id}
                                                    note={note}
                                                    toggleImportance={this.toggleImportance(note.id)} /> )
        
        const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

        return (
            <div>
                <h1>Muistiinpanot</h1>

                <Notification message={this.state.error} />

                {/* If logged in, show note form, else login form */}
                {this.state.user === null ?
                    <Togglable buttonLabel="Login">
                        <LoginForm
                            username={this.state.username}
                            password={this.state.password}
                            handleLogin={this.login}
                            handleLoginFieldChange={this.handleLoginFieldChange}
                        />
                   </Togglable> :
                   <div>
                       <p>
                          {this.state.user.name} logged in <button onClick={this.logout}>Kirjaudu ulos</button>
                       </p>
                       <Togglable buttonLabel="new note" ref={component => this.noteForm = component}>
                            <NoteForm
                                handleAddNote={this.addNote}
                                new_note={this.state.new_note}
                                handleNoteChange={this.handleNoteChange}
                            />
                       </Togglable>
                   </div>
                }
                
                {/* NOTES */}
                <h2>Muistiinpanot</h2>

                <div>
                    <button onClick={this.toggleVisible}>
                        Näytä {label}
                    </button>
                </div>

                <div>
                    {items}
                </div>
            </div>
        )
    }
}

export default App