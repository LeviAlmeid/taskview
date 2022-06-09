import './style.scss'

export function Header(){
    return(
        <header>
            <div className="container">
                <div className="content">
                    <div class="logo"><a href="/"> taskview</a></div>
                    <h3><a href="/Agendas">Agendas</a></h3>
                </div>
            </div>
        </header>
    )
}