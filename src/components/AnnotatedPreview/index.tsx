import React, { useState } from 'react';
import styles from './AnnotatedPreview.module.css';

function LoadingOverlay() {
  return (
    <div className={styles.loadingOverlay} aria-busy="true" aria-label="Schermvoorbeeld laden…">
      <div className={styles.skeleton}>
        <div className={styles.skeletonBar} style={{ width: '40%' }} />
        <div className={styles.skeletonBar} style={{ width: '70%' }} />
        <div className={styles.skeletonBar} style={{ width: '55%' }} />
        <div className={styles.skeletonBlock} />
      </div>
      <p className={styles.loadingLabel}>Schermvoorbeeld laden…</p>
    </div>
  );
}

export interface Annotation {
  /** Interactie-ID, bijv. 'D.1' */
  id: string;
  /** Omschrijving van de interactie */
  label: string;
  /** Horizontale positie als CSS-waarde, bijv. '30%' */
  x: string;
  /** Verticale positie als CSS-waarde, bijv. '45%' */
  y: string;
}

interface Focus {
  /**
   * Zoom-factor: 1 = normaal, 1.5 = 1,5× ingezoomd, 2 = 2× ingezoomd.
   * De wrapper clipt de rest, zodat alleen het gefocuste deel zichtbaar is.
   */
  scale?: number;
  /**
   * Het ankerpunt van de zoom als CSS transform-origin waarde, bijv. '30% 45%'.
   * Standaard 'top left' (linkerbovenhoek).
   */
  origin?: string;
}

interface Props {
  /** Volledige iframe-URL (bijv. Storybook iframe.html?id=...) */
  src: string;
  /** Hoogte van het preview-venster in pixels (standaard 700) */
  height?: number;
  /** Lijst van annotaties die als bolletjes worden weergegeven */
  annotations?: Annotation[];
  /** Toegankelijke titel voor het iframe */
  title?: string;
  /**
   * Optionele zoom/focus-instelling. Zonder deze prop wordt het volledige
   * scherm op schaal 1 getoond.
   */
  focus?: Focus;
}

export default function AnnotatedPreview({
  src,
  height = 700,
  annotations = [],
  title = 'Schermvoorbeeld',
  focus,
}: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const iframeStyle: React.CSSProperties =
    focus?.scale && focus.scale !== 1
      ? {
          transformOrigin: focus.origin ?? 'top left',
          transform: `scale(${focus.scale})`,
          // Vergroot de iframe om de gecropte ruimte op te vullen na de schaling
          width: `${100 / focus.scale}%`,
          height: `${100 / focus.scale}%`,
        }
      : {};

  return (
    <div className={styles.wrapper} style={{ height }}>
      {!loaded && <LoadingOverlay />}
      <iframe
        src={src}
        title={title}
        className={styles.iframe}
        style={{ ...iframeStyle, opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
        scrolling="no"
        onLoad={() => setLoaded(true)}
      />
      {annotations.map((a) => (
        <button
          key={a.id}
          className={`${styles.badge} ${active === a.id ? styles.badgeActive : ''}`}
          style={{ left: a.x, top: a.y }}
          onClick={() => setActive(active === a.id ? null : a.id)}
          aria-label={`Annotatie ${a.id}: ${a.label}`}
        >
          {a.id}
          {active === a.id && (
            <span role="tooltip" className={styles.tooltip}>
              <strong>{a.id}</strong> — {a.label}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
