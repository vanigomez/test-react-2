import ReactDOM from "react-dom";
import './confirmModal.css';

const ConfirmModal= ({isOpen, onClose, onConfirm, message}) =>{
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-contest">
                <p>{Message}</p>
                <div className="modal-buttons">
                    <button className="confirm-button" onClick={onConfirm}>Confirmar</button>
                    <button className="cancel-button" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
        document.getElementById('modal-root')
    );
};
export default ConfirmModal;