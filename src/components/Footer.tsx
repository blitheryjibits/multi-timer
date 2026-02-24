"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: Branding / Copyright */}
        <div >
          <h3 className="text-base font-semibold text-foreground">SwissWatch</h3>
          <p className="mt-2">
            © {currentYear} SwissWatch. All rights reserved.
          </p>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a
                href="mailto:support@yourapp.com"
                className="hover:underline"
              >
              <span className="font-medium">📨 </span>
                robert.thornton92@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://blitherjibits.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                >
                <span>🌐 </span>
                blitherjibits.webCreations.com
              </a>
            </li>
            <li>
              <a href="tel:+40729602079" className="hover:underline">
              <span>📞 </span>
                +40 (729) 602-079
              </a>
            </li>
            <li>
                <a href="https://github.com/blitheryjibits" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <span>💻 </span>
                  GitHub Profile
                </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
