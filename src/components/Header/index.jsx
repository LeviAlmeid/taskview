import './style.scss'

export function Header({onOpenNewTransactionModal}) {
    return (
        <header>
            <div className="header-container">
                <div className="content">
                    <a href="/" className='logo'>taskview</a>

                    <ul>
                        <li><a href="/Agendas">Agendas</a></li>
                        <li><a href="#">Minhas Agendas</a></li>
                        <button type='button' onClick={onOpenNewTransactionModal}>Login</button>
                    </ul>
                </div>
            </div>
        </header>
    )
}