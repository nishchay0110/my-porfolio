const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
      <p>© 2025 Anand Tayde. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="mailto:anandtayade2004@gmail.com" className="hover:text-primary transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
