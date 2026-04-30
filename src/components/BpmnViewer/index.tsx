import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';

interface Props {
  /** Pad naar het BPMN-bestand relatief aan de site root, bijv. '/FlowchartMijnTaken.bpmn' */
  url: string;
  /** Hoogte van de viewer, als getal (pixels) of CSS-string zoals '85vh' (standaard 600) */
  height?: number | string;
}

function BpmnViewerInner({ url, height = 600 }: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Intercept wheel events in the capture phase (runs before bpmn-js bubble-phase handlers).
  // Without Ctrl: let the page scroll, stop bpmn-js from panning.
  // With Ctrl: let bpmn-js handle zoom normally.
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (!e.ctrlKey) {
        e.stopImmediatePropagation();
      }
    };
    el.addEventListener('wheel', handler, { capture: true });
    return () => el.removeEventListener('wheel', handler, { capture: true });
  }, []);

  React.useEffect(() => {
    let viewer: { destroy(): void } | null = null;

    async function init() {
      const BpmnJS = (await import('bpmn-js/lib/NavigatedViewer')).default;
      const xml = await fetch(url).then((r) => r.text());

      viewer = new BpmnJS({ container: containerRef.current! });
      await (viewer as any).importXML(xml);
      (viewer as any).get('canvas').zoom('fit-viewport');
    }

    init().catch(console.error);

    return () => {
      viewer?.destroy();
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      style={{
        height,
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 'var(--ifm-border-radius)',
        overflow: 'hidden',
      }}
    />
  );
}

export default function BpmnViewer(props: Props) {
  const resolvedUrl = useBaseUrl(props.url);
  return <BrowserOnly>{() => <BpmnViewerInner {...props} url={resolvedUrl} />}</BrowserOnly>;
}
