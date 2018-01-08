import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ username, password, handleLogin, handleLoginFieldChange }) => {
    return (
        <div>
            <h2>Kirjaudu</h2>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Käyttäjätunnus</label>
                    <input type="text"
                        name="username"
                        value={username}
                        onChange={handleLoginFieldChange}
                    />
                </div>
                <div>
                    <label>Salasana</label>
                    <input type="password"
                        name="password"
                        value={password}
                        onChange={handleLoginFieldChange}
                    />
                </div>
                <button>Kirjaudu</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleLoginFieldChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm
