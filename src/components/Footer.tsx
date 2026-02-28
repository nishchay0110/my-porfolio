const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-6 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
      <p>© 2025 Nishchay Sahu<span className="text-primary">.</span></p>
      <div className="flex gap-6">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="mailto:nishchaysahu@gmail.com" className="hover:text-primary transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
