import { Component, lazy, Suspense, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { createBadgeTextures } from './lanyard/badgeTextures';
import Logo from './Logo';
import './lanyard/Lanyard.css';

const Lanyard = lazy(() => import('./lanyard/Lanyard'));
let texturePromise;

class LanyardBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function HeroLanyard() {
  const { lang } = useLanguage();
  const reducedMotion = useReducedMotion();
  const actionsRef = useRef(null);
  const stageRef = useRef(null);
  const [sceneHost, setSceneHost] = useState(null);
  const [textures, setTextures] = useState(null);
  const [ready, setReady] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setSceneHost(stageRef.current.closest('section'));
    texturePromise ??= createBadgeTextures();
    texturePromise.then(result => {
      if (!cancelled) setTextures(result);
    }).catch(() => {
      texturePromise = null;
      if (!cancelled) setUnavailable(true);
    });
    return () => { cancelled = true; };
  }, []);

  const interactive = ready && !unavailable;

  return (
    <figure className="hero-lanyard">
      <div
        ref={stageRef}
        className="hero-lanyard-stage"
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        aria-label={interactive ? (lang === 'it' ? 'Gira il badge di Andrea Feliziani' : 'Flip Andrea Feliziani’s badge') : undefined}
        onKeyDown={event => {
          if (interactive && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            actionsRef.current?.flip();
          }
        }}
      >
        {unavailable && (
          <div className="hero-lanyard-fallback" aria-hidden="true">
            <div className="hero-lanyard-fallback-strap" />
            {textures ? <img src={textures.front} alt="" /> : (
              <div className="hero-lanyard-fallback-card">
                <Logo size="sm" />
                <img src={`${import.meta.env.BASE_URL}assets/images/Andrea.jpeg`} alt="" />
                <strong>Andrea Feliziani</strong>
                <small>UI/UX Designer · Front-end Developer</small>
              </div>
            )}
          </div>
        )}
        {sceneHost && textures && !unavailable && createPortal(
          <LanyardBoundary onError={() => setUnavailable(true)}>
            <Suspense fallback={null}>
              <Lanyard
                frontImage={textures.front}
                backImage={textures.back}
                strapImage={textures.strap}
                cardColor="#f2ede6"
                strapColor="#1a1510"
                size={0.68}
                strapLength={0.2}
                cornerRadius={0.35}
                strapWidth={0.65}
                finish="glossy"
                breeze={reducedMotion ? 0 : 0.08}
                intro={!reducedMotion}
                damping={0.65}
                actionsRef={actionsRef}
                frameRef={stageRef}
                eventTarget={sceneHost}
                onReady={() => setReady(true)}
                onError={() => setUnavailable(true)}
                className={`hero-lanyard-overlay ${ready ? 'is-ready' : ''}`}
              />
            </Suspense>
          </LanyardBoundary>, sceneHost
        )}
      </div>
      <figcaption className="sr-only">
        Andrea Feliziani — UI/UX Designer, Front-end Developer.
      </figcaption>
    </figure>
  );
}
