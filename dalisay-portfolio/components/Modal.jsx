import { useEffect } from 'react'
import './Modal.css'

export default function Modal({ isOpen, onClose, eyebrow, title, children }) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <p className="eyebrow modal__eyebrow">{eyebrow}</p>
        <h3 className="modal__title">{title}</h3>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}
