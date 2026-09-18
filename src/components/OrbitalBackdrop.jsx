import React from 'react';

const Missile = ({ className = '' }) => (
  <div className={`bg-missile ${className}`} aria-hidden="true">
    <div className="bg-missile-nose" />
    <div className="bg-missile-body"><span>A</span></div>
    <div className="bg-missile-fin left" />
    <div className="bg-missile-fin right" />
    <div className="bg-missile-flame" />
  </div>
);

export default function OrbitalBackdrop() {
  return (
    <div className="orbital-backdrop" aria-hidden="true">
      <div className="orbital-noise" />
      <div className="orbital-system">
        <div className="bg-orbit bg-orbit-wide" />
        <div className="bg-orbit bg-orbit-inner" />
        <div className="bg-earth-glow" />

        <div className="bg-earth">
          <div className="bg-earth-lights" />
          <div className="bg-earth-continent c1" />
          <div className="bg-earth-continent c2" />
          <div className="bg-earth-continent c3" />
          <div className="bg-earth-grid" />
          <span>EARTH / ASTRA-01</span>
        </div>

        <div className="bg-orbit-layer bg-orbit-back">
          <div className="bg-orbit-track">
            <Missile />
          </div>
        </div>
        <div className="bg-orbit-layer bg-orbit-front">
          <div className="bg-orbit-track">
            <Missile />
          </div>
        </div>

        <div className="bg-target-ring" />
      </div>

      <div className="orbital-readout orbital-readout-a">
        <span>ORBITAL VECTOR</span><b>NX-01</b>
      </div>
      <div className="orbital-readout orbital-readout-b">
        <span>ALTITUDE</span><b>408 KM</b>
      </div>
      <div className="orbital-readout orbital-readout-c">
        <span>LINK</span><b>SECURE</b>
      </div>
    </div>
  );
}
