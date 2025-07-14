export default function StreamlitEmbed({ src }) {
  return (
    <div className="w-full h-64">
      <iframe src={src} className="w-full h-full" />
    </div>
  );
}
