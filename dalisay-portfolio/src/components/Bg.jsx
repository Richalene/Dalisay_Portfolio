import CRTWarp from './bg/Crtbg.jsx';


<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <CRTWarp
    color="#29192c"
    backgroundColor="#05010a"
    speed={0.5}
    curvature={0.25}
    scanlineStrength={0.25}
    scanlineFrequency={235}
    waveAmplitude={0.07}
    waveFrequency={5.5}
    bloom={0.45}
    bloomRadius={1}
    noise={0.25}
    vignette={1}
    brightness={1.25}
    pixelation={1}
    rgbShift={0.015}
    mouseReact
    mouseStrength={0.5}
    dpr={1}
    fps={30}
    paused={false}
/>
</div>