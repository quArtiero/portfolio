export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center p-4 relative">
      <div className="space-x-4">
        <a href="https://github.com/pedroquartiero" className="text-neon">GitHub</a>
        <a href="https://linkedin.com" className="text-neon">LinkedIn</a>
        <a href="mailto:pedro@example.com" className="text-neon">Email</a>
      </div>
      <div className="fixed bottom-4 right-4 bg-gray-800 p-2 rounded text-neon">Chat-widget</div>
    </footer>
  );
}
