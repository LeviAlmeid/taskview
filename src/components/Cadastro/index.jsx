import './style.scss';

export function Cadastro() {
    return (
        <form className='cad-form' action="">
            <h3>Comece com a gente!</h3>
            <p>Preencha as informações e comece hoje a organizar ou fazer parte de uma agenda</p>

            <div className="cadastro-info">
                <h2>Name: </h2>
                <input type="text" placeholder="Joaquim da Silva" />
            </div>

            <div className="cadastro-info">
                <h2>Email adress: </h2>
                <input type="email" placeholder="Joaquim@email.com" />
            </div>

            <div className="pass">
                <div id="password" className="cadastro-info">
                    <h2>Senha: </h2>
                    <input type="password" />
                </div>
                <div id="password" className="cadastro-info">
                    <h2>Senha: </h2>
                    <input type="password" />
                </div>

            </div>

        </form>
    )
}