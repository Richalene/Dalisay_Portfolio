import Modal from './Modal.jsx'

export default function ContactModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} eyebrow="Dossier / 03" title="Contact">
      <p style={{ marginBottom: '20px' }}>
        Open to infrastructure and platform-engineering work. Reachable
        directly, no forms.
      </p>
      <p style={{ marginBottom: '8px' }}>
        <strong>Email</strong> — dalisaymary@gmail.com
      </p>
      <p style={{ marginBottom: '8px' }}>
        <strong>GitHub</strong> — <a href="https://github.com/richalene" target="_blank" rel="noopener noreferrer">github.com/richalene</a>
      </p>
      <p>
        <strong>Linked In</strong> — <a href="https://www.linkedin.com/in/mary-richalene-dalisay-35b1a5244/" target="_blank" rel="noopener noreferrer">Mary Richalene Dalisay</a>
      </p>
    </Modal>
  )
}
