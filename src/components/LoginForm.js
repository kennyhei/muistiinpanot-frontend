import React from 'react'

const LoginForm = ({ login, username, password, handleLoginFieldChange }) => {
    return (
        <div>
            <h2>Kirjaudu</h2>

            <form onSubmit={login}>
                <div>
                    Käyttäjätunnus
                    <input type="text"
                        name="username"
                        value={username}
                        onChange={handleLoginFieldChange}
                    />
                </div>
                <div>
                    Salasana
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
