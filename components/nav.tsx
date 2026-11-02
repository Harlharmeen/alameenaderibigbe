'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import ThemeToggle from './theme-toggle';


export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);


  /* =========================================================
     CLOSE MENU WITH ESCAPE
     ========================================================= */

  useEffect(() => {

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {

      if (event.key === 'Escape') {
        setMenuOpen(false);
      }

    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  }, []);


  /* =========================================================
     CLOSE MENU
     ========================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (

    <header className="site-nav">

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div
        className="
          container
          flex
          h-[72px]
          items-center
          justify-between
        "
      >

        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          href="/"
          onClick={closeMenu}
          className="
            relative
            z-50
            text-lg
            font-extrabold
            tracking-[-.06em]
          "
        >
          AA

          <span
            className="
              text-[color:var(--accent)]
            "
          >
            .
          </span>
        </Link>


        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-7
            md:flex
          "
          aria-label="Main navigation"
        >

          <Link
            href="/"
            className="nav-link"
          >
            Home
          </Link>


          <Link
            href="/about"
            className="nav-link"
          >
            About
          </Link>


          <Link
            href="/projects"
            className="nav-link"
          >
            Projects
          </Link>


          <Link
            href="/blog"
            className="nav-link"
          >
            Blog
          </Link>

        </nav>


        {/* ===================================================
            DESKTOP ACTIONS
        =================================================== */}

        <div
          className="
            hidden
            items-center
            gap-2
            md:flex
          "
        >

          <a
            href="#contact"
            className="nav-work-button"
          >
            Let's work
          </a>

          <ThemeToggle />

        </div>


        {/* ===================================================
            MOBILE ACTIONS
        =================================================== */}

        <div
          className="
            flex
            items-center
            gap-2
            md:hidden
          "
        >

          <ThemeToggle />


          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className={`
              mobile-menu-button
              ${
                menuOpen
                  ? 'is-open'
                  : ''
              }
            `}
          >

            <span
              className="
                mobile-menu-icon
              "
            >

              <span
                className="
                  mobile-menu-line
                "
              />

              <span
                className="
                  mobile-menu-line
                "
              />

            </span>

          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        id="mobile-navigation"
        className={`
          mobile-nav
          ${
            menuOpen
              ? 'is-open'
              : 'is-closed'
          }
        `}
      >

        <nav
          className="
            container
            py-5
          "
          aria-label="Mobile navigation"
        >

          {/* =================================================
              HOME
          ================================================= */}

          <Link
            href="/"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Home
          </Link>


          {/* =================================================
              ABOUT
          ================================================= */}

          <Link
            href="/about"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            About
          </Link>


          {/* =================================================
              PROJECTS
          ================================================= */}

          <Link
            href="/projects"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Projects
          </Link>


          {/* =================================================
              BLOG
          ================================================= */}

          <Link
            href="/blog"
            onClick={closeMenu}
            className="mobile-nav-link"
          >
            Blog
          </Link>


          {/* =================================================
              MOBILE LET'S WORK
          ================================================= */}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mobile-work-button"
          >

            <span>
              Let's work
            </span>

            <span
              className="
                mobile-work-arrow
              "
              aria-hidden="true"
            >
              →
            </span>

          </a>

        </nav>

      </div>

    </header>

  );
}