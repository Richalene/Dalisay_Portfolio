import Modal from './Modal.jsx'

const GROUPS = [
  {
    label: 'Systems',
    items: [
      'Linux (Arch, Debian)',
      'System customization (ricing, window managers)',
      'Low-level environment tuning',
    ],
    image: '/public/linux-rice.jpg',
    alt: 'Configuring and customizing an Arch Linux environment with personalized system visuals.',
  },
  {
    label: 'Media & Streaming',
    items: [
      'OBS Studio livestreaming',
      'Scene composition and transitions',
      'Local recording and encoding pipelines',
    ],
    image: '/public/obs.png',
    alt: 'Configuring OBS Studio for livestreaming with custom scenes, overlays, and real-time encoding.',
  },
]

export default function TechModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} eyebrow="Dossier / 02" title="Stack">
      {GROUPS.map((group) => (
        <div key={group.label} style={{ marginBottom: '28px' }}>
          
          {/* Label */}
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.5)',
              marginBottom: '10px',
            }}
          >
            {group.label}
          </p>

          {/* Image */}
          <img
            src={group.image}
            alt={group.alt}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              marginBottom: '10px',
              borderRadius: '4px',
            }}
          />

          {/* Content */}
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#111',
            }}
          >
            {group.items.join(' · ')}
          </p>
        </div>
      ))}
    </Modal>
  )
}