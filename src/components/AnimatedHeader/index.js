"use client";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Mask from "./Nav";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import logo from "../../../public/assets/logo-name.png";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import StyledLink from "../StyledLink";
import LanguageChanger from "@/components/LanguageChanger";
import Magnetic from "@/common/Magnetic";

export default function Navbar3() {
  const header = useRef(null);
  const circleRefs = useRef([]);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [activeNavItem, setActiveNavItem] = useState("");
  const { t, i18n } = useTranslation("common");
  const locale = i18n.language;

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    const currentPathname = pathname.replace("/", "");
    setActiveNavItem(currentPathname);
  }, [pathname]);

  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const medium = 1000;

  const handleRef = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };

  const links = [
    {
      active: "about",
      link: "/about",
      spanish: "Nosotros",
      english: "About us",
    },
    {
      active: "procedures",
      link: "/procedures",
      spanish: "Tratamientos",
      english: "Procedures",
    },
    {
      active: "hairimplant",
      link: "/",
      spanish: "Implante capilar",
      english: "Hair implant",
    },
    {
      active: "faqs",
      link: "/faqs",
      spanish: "FAQs",
      english: "FAQs",
    },
    {
      active: "contact",
      link: "/contact",
      spanish: "Contacto",
      english: "Contact",
    },
  ];

  return (
    <>
      <>
        <div ref={header} className={styles.header}>
          <div className={styles.headercontainer}>
            <div className={styles.leftside}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image src={logo} alt="image" className={styles.logo} />
                </Link>
              </div>
            </div>
            {width > medium ? (
              <>
                <div className={styles.rightside}>
                  <div className={styles.nav}>


                  {links.map((link) => (
                      <div
                        key={link.active}
                        className={`${styles.el} ${
                          activeNavItem === link.active ? styles.active : ""
                        }`}
                      >
                        <Magnetic>
                          <div key={link.link} className={styles.el}>
                            <StyledLink link={link.link}>
                              <p className={styles.text}>
                                {locale === "es" ? link.spanish : link.english}
                              </p>
                            </StyledLink>
                            <div
                              className={styles.indicator}
                              ref={handleRef}
                            ></div>
                          </div>
                        </Magnetic>
                      </div>
                    ))}

{/* 
                    <div
                      className={`${styles.el} ${
                        activeNavItem === "about" ? styles.active : ""
                      }`}
                    >
                      <Magnetic>
                        <div className={styles.el}>
                          <StyledLink link="/about">
                            <p className={styles.text}>
                              {locale === "es" ? "Nosotros" : "About"}
                            </p>
                          </StyledLink>
                          <div
                            className={styles.indicator}
                            ref={handleRef}
                          ></div>
                        </div>
                      </Magnetic>
                    </div>

                    <div
                      className={`${styles.el} ${
                        activeNavItem === "procedures" ? styles.active : ""
                      }`}
                    >
                      <Magnetic>
                        <div className={styles.el}>
                          <StyledLink link="/procedures">
                            <p className={styles.text}>
                              {locale === "es" ? "Tratamientos" : "Procedures"}
                            </p>
                          </StyledLink>
                          <div
                            className={styles.indicator}
                            ref={handleRef}
                          ></div>
                        </div>
                      </Magnetic>
                    </div>

                    <div
                      className={`${styles.el} ${
                        activeNavItem === "hairimplant" ? styles.active : ""
                      }`}
                    >
                      <Magnetic>
                        <div className={styles.el}>
                          <StyledLink link="/">
                            <p className={styles.text}>
                              {locale === "es"
                                ? "Implante capilar"
                                : "Hair implant"}
                            </p>
                          </StyledLink>
                          <div
                            className={styles.indicator}
                            ref={handleRef}
                          ></div>
                        </div>
                      </Magnetic>
                    </div>

                    <div
                      className={`${styles.el} ${
                        activeNavItem === "faqs" ? styles.active : ""
                      }`}
                    >
                      <Magnetic>
                        <div className={styles.el}>
                          <StyledLink link="/faqs">
                            <p className={styles.text}>FAQs</p>
                          </StyledLink>
                          <div
                            className={styles.indicator}
                            ref={handleRef}
                          ></div>
                        </div>
                      </Magnetic>
                    </div>

                    <div
                      className={`${styles.el} ${
                        activeNavItem === "contact" ? styles.active : ""
                      }`}
                    >
                      <Magnetic>
                        <div className={styles.el}>
                          <StyledLink link="/contact">
                            <p className={styles.text}>
                              {locale === "es" ? "Contacto" : "Contact"}
                            </p>
                          </StyledLink>
                          <div
                            className={styles.indicator}
                            ref={handleRef}
                          ></div>
                        </div>
                      </Magnetic>
                    </div> */}
                  </div>
                  <LanguageChanger />
                </div>
              </>
            ) : (
              <>
                <div className={styles.headerButtonContainerMobile}>
                  <div
                    onClick={() => {
                      setIsActive(!isActive);
                    }}
                    className={`${styles.button}`}
                  >
                    <div
                      className={`${styles.burger} ${
                        isActive ? styles.burgerActive : ""
                      }`}
                    ></div>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  {isActive && <Mask links={links} />}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
}

{
  /* {links.map((link) => (
                      <div
                        key={link.active}
                        className={`${styles.el} ${
                          activeNavItem === link.active ? styles.active : ""
                        }`}
                      >
                        <Magnetic>
                          <div key={link.link} className={styles.el}>
                            <StyledLink link={link.link}>
                              <p className={styles.text}>
                                {locale === "es" ? link.spanish : link.english}
                              </p>
                            </StyledLink>
                            <div
                              className={styles.indicator}
                              ref={handleRef}
                            ></div>
                          </div>
                        </Magnetic>
                      </div>
                    ))} */
}
