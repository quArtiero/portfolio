import Link from 'next/link';

export default function ProjectCard({ image, title, description, link }) {
  return (
    <div className="bg-gray-900 p-4 rounded shadow">
      {image && <img src={image} alt={title} className="mb-4 w-full h-32 object-contain" />}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      {link && <Link href={link} className="text-neon underline">View Demo</Link>}
    </div>
  );
}
