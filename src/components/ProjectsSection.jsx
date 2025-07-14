import ProjectCard from './ProjectCard';
import StreamlitEmbed from './StreamlitEmbed';
import ThreeSkillOrb from './ThreeSkillOrb';

export default function ProjectsSection() {
  return (
    <div className="container mx-auto grid md:grid-cols-3 gap-8">
      <ProjectCard
        image="/img/sutero-logo.png"
        title="Šutêru"
        description="Quiz-to-rice platform: each correct answer donates rice to communities."
        link="/demo/sutero"
      />
      <ProjectCard
        image="/img/dyadapt-chart.png"
        title="DyAdapt"
        description="Adaptive ML for dyslexic students—published in Journal of Student Research."
        link="/demo/dyadapt"
      />
      <div className="space-y-4">
        <StreamlitEmbed src="https://dyadapt.app/embed" />
        <ThreeSkillOrb />
      </div>
    </div>
  );
}
