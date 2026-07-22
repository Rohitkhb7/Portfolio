"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
  ];

  return (
    <div className="w-full flex justify-center items-center fixed top-0 left-0 right-0 z-50 bg-[var(--bg-header)] backdrop-blur-md border-b border-dashed border-[var(--border-dashed)]">
      <div className="h-12 items-center flex px-4 justify-between w-full max-w-[800px] border-x border-dashed border-[var(--border-dashed)] relative">
        {/* Brand Logo */}
        <div>
          <a href="#home">
            <p className="font-serif-custom text-3xl text-[var(--text-primary)] cursor-pointer leading-none">
              Rohit
            </p>
          </a>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-6 items-center">
          <nav className="flex gap-5 items-center text-[var(--text-secondary)] text-sm">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative py-1 cursor-pointer transition-colors duration-200 select-none ${
                    isActive
                      ? "text-[var(--text-primary)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-1 rounded-full bg-[var(--text-primary)]" />
                  )}
                </a>
              );
            })}
          </nav>
          <div className="h-4 w-[1px] bg-[var(--border-dashed)]" />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--text-primary)] p-1 rounded-md hover:bg-[var(--hover-bg)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-12 left-0 right-0 bg-[var(--bg-primary)] border-b border-dashed border-[var(--border-dashed)] px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveTab(item.name);
                setMobileMenuOpen(false);
              }}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
