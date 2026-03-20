const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xl font-display font-bold glow-text text-primary">ArticNodes</span>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
          <a href="#" className="hover:text-primary transition-colors">Discord</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 ArticNodes. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
