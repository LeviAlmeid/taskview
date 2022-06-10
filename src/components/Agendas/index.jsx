import { AgendaItem } from "./Item";
import './style.scss';

export function AgendasComp() {
    return (
        <div className="container">
            <div className="agenda-content" >
                <div className="agendas">
                    <h2>Minhas Agendas</h2>
                    <div className="itens">
                        <AgendaItem />
                        <AgendaItem />
                        <AgendaItem />
                    </div>

                </div>

            </div>
        </div>
    )
}