const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
      <p>© 2025 Nishchay Sahu</p>
      <div className="flex gap-6">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        <a href="mailto:nishchaysahu@gmail.com" className="hover:text-foreground transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
