"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/GALACTIC_TRANS_BG (1).png";
import {
  Menu,
  X,
  ChevronDown,
  Search
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const navItems = [
    {
      title: "Services & Solutions",
      hasDropdown: true,
      items: [
        {
          name: "Cloud Foundation & Deployment",
          subItems: [
            {
              name: "Cloud Landing Zone",
              description: "Start Transforming Your Business with Cloud-Native Securely.",
              href: "/services/cloud-landing-zone", // Matches the route
            },
            {
              name: "Cloud Migration",
              description: "Transform Into Cloud-Native Without Disruption",
              href: "/services/cloud-migration", // Matches the route
            },
          ],
        },
        {
          name: "Security & Resilience",
          subItems: [
            {
              name: "Cloud Security & Compliance",
              description: "Stay Safe and Compliant",
              href: "/services/cloud-security", // Matches the route
            },
            {
              name: "Cloud Backup Solutions",
              description: "Recover Quickly and Protect What Matters",
              href: "/services/cloud-backup", // Matches the route
            },
          ],
        },
        {
          name: "Modernization",
          subItems: [
            {
              name: "Cloud Platform Accelerator & Containerization",
              href: "/services/cloud-platform-accelerator", // Matches the route
            },
          ],
        },
        {
          name: "Performance & Cost Optimization",
          subItems: [
            {
              name: "Optimize for Efficiency – Well-Architected Review",
              href: "/services/well-architected-review", // Matches the route
            },
          ],
        },
        {
          name: "Managed Cloud Operations",
          subItems: [
            {
              name: "Billing Management & Optimization Service (BMOS)",
              description: "Manage Cloud Spend with Confidence",
              href: "/services/billing-management", // Matches the route
            },
            {
              name: "Cloud Management & Optimization Service (CMOS)",
              description: "Keep Operations Running Smoothly",
              href: "/services/cloud-management", // Matches the route
            },
          ],
        },
      ],
    },
    {
      title: "Company",
      hasDropdown: true,
      items: [
        {
          name: "Careers",
          description: "Be part of Galactic Network!",
          href: "/company/careers", // Matches the route
        },
      ],
    },
    {
      title: "Resources",
      hasDropdown: true,
      items: [
        {
          name: "Events",
          description: "Join us at our next event",
          href: "/resources/events", // Matches the route
        },
        {
          name: "FAQs",
          description: "Get answers to your questions",
          href: "/resources/faqs", // Matches the route
        },
      ],
    },
    {
      title: "About Us",
      hasDropdown: false,
      items: [],
      href: "/about-us", // Matches the route
    },
    {
      title: "Contact Us",
      hasDropdown: false,
      items: [],
      href: "/contact-us", // Matches the route
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Mission Cloud Logo"
                width={120}
                height={35}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.hasDropdown ? (
                  // Dropdown Logic
                  <>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex items-center px-2 py-1 text-sm font-medium text-gray-700 hover:text-mission-orange transition-colors"
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-md overflow-hidden z-50">
                        <div className="p-5">
                          {item.items.map((subItem, idx) => (
                            <div key={idx} className="mb-4">
                              {subItem.subItems ? (
                                <>
                                  <h3 className="font-medium text-gray-800 mb-2">{subItem.name}</h3>
                                  <div className="ml-4">
                                    {subItem.subItems.map((sub, subIdx) => (
                                      <Link
                                        key={subIdx}
                                        href={sub.href}
                                        className="block py-1 text-sm text-gray-600 hover:text-mission-orange"
                                      >
                                        {sub.name}
                                        <p className="text-xs text-gray-500">{sub.description}</p>
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={subItem.href}
                                  className="block py-1 text-sm text-gray-600 hover:text-mission-orange"
                                >
                                  <span className="font-medium">{subItem.name}</span>
                                  <p className="text-xs text-gray-500">{subItem.description}</p>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  // Non-Dropdown Logic
                  <Link
                    href={item.href}
                    className="px-2 py-1 text-sm font-medium text-gray-700 hover:text-mission-orange transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Search */}
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Get Started button */}
            <Link
              href="#"
              className="inline-block px-4 py-2 text-sm font-medium rounded-full text-white bg-mission-navy hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-mission-orange hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-mission-orange"
                >
                  {item.title}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </button>

                {activeDropdown === item.title && item.hasDropdown && (
                  <div className="pl-4 space-y-2">
                    {item.items && item.items.map((subItem, idx) => (
                      <div key={idx} className="py-2">
                        {subItem.subItems ? (
                          <>
                            <h3 className="px-3 text-sm font-medium text-gray-800">{subItem.name}</h3>
                            <div className="mt-1 pl-3">
                              {subItem.subItems.map((sub, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={sub.href}
                                  className="block px-3 py-1 text-sm text-gray-600 hover:text-mission-orange"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={subItem.href as string}
                            className="block px-3 py-1 text-sm text-gray-600 hover:text-mission-orange"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile search */}
            <div className="px-3 py-2">
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 text-sm w-full focus:outline-none"
                />
              </div>
            </div>

            {/* Mobile get started button */}
            <div className="px-3 py-2">
              <Link
                href="#"
                className="block w-full text-center px-4 py-2 text-sm font-medium rounded-full text-white bg-mission-navy hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
