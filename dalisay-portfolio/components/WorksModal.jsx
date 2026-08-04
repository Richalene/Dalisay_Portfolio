import Modal from './Modal.jsx'
import './WorksModal.css'

const PROJECTS = [
  {
    title: 'SenyaSabi',
    description:
      'Filipino Sign Language learning system with real-time recognition via MediaPipe landmark extraction and CNN classification.',
    stack: ['PySide6', 'MediaPipe', 'CNN'],
    image: '/public/senyasabi.jpg',
  },
  {
    title: 'Starlink Data Scraper',
    description:
      'Live-session scraper extracting structured data directly from Chrome and exporting to CSV pipelines.',
    stack: ['Selenium', 'pandas'],
  },
  {
    title: 'Self-Hosted Media Server',
    description:
      'Arch Linux-based media system with Flask backend for streaming at home.',
    stack: ['Python', 'Flask', 'Arch Linux'],
  },
]

export default function WorksModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} eyebrow="Dossier / 00" title="Works">
      <div className="works-list">
        {PROJECTS.map((p, i) => (
          <div className="works-item" key={p.title}>
            <span className="works-item__index">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h4 className="works-item__title">{p.title}</h4>
              <p className="works-item__desc">{p.description}</p>
              <p className="works-item__stack">{p.stack.join(' / ')}</p>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  )
}
