import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ScrollSection({ id, children }) {
  const ref = useScrollAnimation();
  return (
    <section id={id} ref={ref} className="animate py-20">
      {children}
    </section>
  );
}
