type Feature = { title: string; description: string };

export function FeatureCard({ feature }: { feature: Feature }) {
  return <section aria-label={feature.title}>
    <h2>{feature.title}</h2><p>{feature.description}</p>
  </section>;
}
