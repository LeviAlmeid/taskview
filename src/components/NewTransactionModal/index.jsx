
import './style.scss';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className="react-modal-content"
    >

      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#fa0303" />
        </svg>
      </button>

      <form className='modal-form'>
        <h2>Login</h2>

        <input type="email" id="" placeholder='Email' />

        <input type="password" id="" placeholder='Senha' />

        <button type="submit">Entrar</button>


      </form>
    </Modal>
  )
}