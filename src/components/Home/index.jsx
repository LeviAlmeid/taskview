import { Cadastro } from '../Cadastro';
import './style.scss';

export function HomeCont(){
  return(
    <div className="container">
            <div className="content-home">
                <div className="home-col-a">
                    <h2>Suas tarefas em um unico lugar:</h2>
                    <img src="" alt="Imagem taskvew" />
                </div>

                <div className="home-col-b">
                    <div className='cent'>
                    <div className="content-col-b">
                        <Cadastro />

                    </div>

                    </div>
                </div>
            </div>
        </div>
  )
}