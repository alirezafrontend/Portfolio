import { Menu, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const nav = [
  { name: "home", title: "Home" },
  { name: "about", title: "About Me" },
  { name: "service", title: "Services" },
  { name: "projects", title: "Projects" },
  { name: "contact", title: "Contact Me" },
];

const Navbar = () => {
  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemRefs = useRef([]);

  const updateIndicator = (index) => {
    const li = itemRefs.current[index];
    if (li) {
      setActiveStyle({
        left: li.offsetLeft,
        width: li.offsetWidth,
      });
    }
  };

  const handleScrollTo = (sectionId, index) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
    updateIndicator(index);
    setActiveIndex(index);
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const sections = nav.map((item) => document.getElementById(item.name));
    const scrollPosition = window.scrollY + window.innerHeight / 2 - 100;

    sections.forEach((section, index) => {
      if (
        section &&
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        setActiveIndex(index);
        updateIndicator(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    updateIndicator(activeIndex);
  }, [activeIndex]);

  return (
    <nav className="relative z-50">
      <div className="hidden lg:flex">
        <ul className="flex">
          {nav.map((item, i) => (
            <li
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="cursor-pointer mr-[45px]"
            >
              <a
                href={`#${item.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.name, i);
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <span
          className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
          style={{
            left: activeStyle.left,
            width: activeStyle.width,
          }}
        ></span>
      </div>

      <div className="flex lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col justify-center items-center transition-all duration-300">
            <ul className="flex flex-col gap-6 text-black text-[20px]">
              {nav.map((item, i) => (
                <li key={i} className="relative text-center cursor-pointer">
                  <a
                    href={`#${item.name}`}
                    className="inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(item.name, i);
                    }}
                  >
                    {item.title}
                  </a>
                  {activeIndex === i && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-black"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
