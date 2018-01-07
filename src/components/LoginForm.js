import React from 'react'

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

export default LoginForm
