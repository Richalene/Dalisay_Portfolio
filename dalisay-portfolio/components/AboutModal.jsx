import Modal from './Modal.jsx'

export default function AboutModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} eyebrow="Dossier / 01" title="About">

      {/* Your Photo */}
      <img
        src="/public/me.jpg"
        alt="Working within a personal development setup, surrounded by monitors, system tools, and a custom Linux environment."
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          marginBottom: '18px',
          borderRadius: '4px',
        }}
      />

      <p style={{ marginBottom: '16px' }}>
        I work across systems, networking, and software — building and
        breaking things to understand how they actually run. Most of my
        projects live somewhere between Linux environments, self-hosted
        setups, and small tools that solve very specific problems.
      </p>

      <p style={{ marginBottom: '16px' }}>
        I spend a lot of time inside Arch and Arch-based systems tweaking
        configurations, experimenting with setups, and refining how things
        look and behave. It’s equal parts functionality and curiosity.
      </p>

      <p>
        Outside of that, I work on livestreaming setups with OBS, run local
        media and server stacks, and build projects that let me explore
        real-time systems, automation, and data pipelines.
      </p>

    </Modal>
  )
}