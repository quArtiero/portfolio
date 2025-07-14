import ThreeSkillOrb from './ThreeSkillOrb';

export default function AboutSection() {
  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>I’m Pedro Quartiero, a 17-year-old full-stack developer and ML researcher. My core values—<strong>Family</strong>, <strong>Balance</strong>, <strong>Commitment</strong>—shape every project I build.</p>
      </div>
      <div className="h-64">
        <ThreeSkillOrb />
      </div>
    </div>
  );
}
