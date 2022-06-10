import './style.scss'

export function AgendaItem() {
  return(
            <div class="agendas-item">
              <div class="title-item">
                <strong> Nome da Agenda</strong>
                <div class="title-buttons">
                  <i class="bi bi-pen"></i>
                  <i class="bi bi-x-circle"></i>
                </div>
              </div>
              <div class="cont">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
              </div>
              <div class="footer">
                <strong> Visualizar</strong>
              </div>
            </div>
  )
}