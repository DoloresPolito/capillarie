"use client";
import styles from "./styles.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Mask from "./Nav";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Rounded from "../../common/Rounded";
import logo from "../../../public/assets/logo-name.png";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import StyledLink from "../StyledLink";
import LanguageChanger from "@/components/LanguageChanger";
export default function Navbar3() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const [activeNavItem, setActiveNavItem] = useState(null);

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
  }, []);
  const medium = 1200;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 50,
        end: 100,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

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

                <div className={styles.nav}>
                  <div
                    className={`${styles.el} ${
                      activeNavItem === "/about" ? styles.active : ""
                    }`}
                  >
                    <StyledLink link="/about">
                      <p className={styles.text}>
                        {locale === "es" ? "NOSOTROS" : "ABOUT"}
                      </p>
                    </StyledLink>
                  </div>
          
                    <StyledLink link="/hairimplant">
                      <p className={styles.text}>TRANSPLANTE</p>
                    </StyledLink>
             
                  <div
                    className={`${styles.el} ${
                      activeNavItem === "/procedures" ? styles.active : ""
                    }`}
                  >
                    <StyledLink link="/procedures">
                      <p className={styles.text}>
                        {locale === "es" ? "TRATAMIENTOS" : "PROCEDURES"}
                      </p>
                    </StyledLink>
                  </div>
                  <StyledLink link="/faqs">
                    <p className={styles.text}>FAQs</p>
                  </StyledLink>

                  {/* <StyledLink link="/contact">
                  <p className={styles.text}>{t("common:nav_contact")}</p>
                </StyledLink> */}
                </div>
              </div>
              <div className={styles.rightside}>
            
                <LanguageChanger />
              </div>
            </div>
          </div>
          <div ref={button} className={styles.headerButtonContainer}>
        
            {/* <Rounded
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`${styles.button}`}
            >
              <p className={styles.buttontext}>MENU</p>
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </Rounded> */}


            <div className={styles.bookbutton}><p>Book an appoiment</p></div>
          </div>
          <AnimatePresence mode="wait">{isActive && <Mask />}</AnimatePresence>
        </>



    </>
  );
}



// {width > medium ? (


//   ) : (
//     <>
//       <div ref={header} className={styles.header}>
//         <div className={styles.headercontainer}>
//           <div className={styles.logo}>
//             <Link href="/">
//               <Image src={logo} alt="image" className={styles.logo} />
//             </Link>
//           </div>

//           <div className={styles.headerButtonContainerMobile}>
//             <div className={styles.bookbutton}>hola</div>
//             <Rounded
//               onClick={() => {
//                 setIsActive(!isActive);
//               }}
//               className={`${styles.button}`}
//             >
//               <p className={styles.buttontext}>MENU</p>
//               <div
//                 className={`${styles.burger} ${
//                   isActive ? styles.burgerActive : ""
//                 }`}
//               ></div>
//             </Rounded>
//           </div>
//           <AnimatePresence mode="wait">
//             {isActive && <Mask />}
//           </AnimatePresence>
//         </div>
//       </div>
//     </>
//   )}
