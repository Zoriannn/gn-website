import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/Galactic Network Logo_White.png"
const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Our Culture", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Discover", href: "#" },
      ]
    },
    {
      title: "Platform",
      links: [
        { name: "Cloud Management Services", href: "#" },
        { name: "Professional Services", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src={logo}
                alt="GN Logo"
                width={160}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Links columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Empty column for spacing */}
          <div></div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-xs text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Galactic Network Sdn Bhd - Registration No: 202401001582 (1547433K)
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
