"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export default function GSAPController() {
  const currentPath = usePathname();

  useEffect(() => {
    /**
     * @toggle_actions_value_options => play, pause, resume, reset, restart, complete, reverse, none
     * @toggleActions positions: "position1 position2 position3 position4 
     * @position1 => onEnter
     * @position2 => onLeave
     * @position3 => onEnterBack
     * @position4 => onLeaveBack
     * 
     * @example: toggleActions: "play none none none" means:
     * @onEnter: play
     * @onLeave: none
     * @onEnterBack: none
     * @onLeaveBack: none
     * */

    // Register plugins
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    let mm;
    let splitTexts = [];
    let initFrame;
    let initTimer;
    let resizeTimer;
    let handleResize;

    const distances = {
      sm: 40,
      md: 80,
      lg: 150
    };

    const getDistance = (element, fallback = "md") => {
      const value = element.dataset.gsapDistance;

      if (!value) {
        return distances[fallback];
      }

      return distances[value] || Number(value) || distances[fallback];
    };

    const getStagger = (element, fallback = 0.1) => {
      return Number(element.dataset.gsapStagger) || fallback;
    };

    const init = () => {
      if (mm) {
        mm.revert();
        mm = null;
      }

      splitTexts.forEach(splitText => splitText.revert());
      splitTexts = [];

      ScrollTrigger.getAll().forEach(t => t.kill());

      ScrollTrigger.defaults({
        toggleActions: "play none none reset",
        start: "top bottom"
      });

      gsap.defaults({
        ease: "power2.inOut",
        duration: 0.75
      });

      gsap.from(".brand-logo", { opacity: 0, scale: 0.85, duration: 1, delay: 0.35 });

      gsap.utils.toArray("[data-gsap-animate='fade-up']").forEach(element => {
        gsap.from(element, {
          y: getDistance(element, "lg"),
          opacity: 0.25,
          scrollTrigger: {
            trigger: element
          }
        });
      });

      gsap.utils.toArray("[data-gsap-animate='stagger-fade-up']").forEach(element => {
        gsap.from(element.children, {
          y: getDistance(element, "sm"),
          opacity: 0,
          stagger: getStagger(element, 0.25),
          scrollTrigger: {
            trigger: element
          }
        });
      });

      gsap.utils.toArray("[data-gsap-animate='fade-down']").forEach(element => {
        gsap.from(element, {
          y: -getDistance(element, "lg"),
          opacity: 0.25,
          scrollTrigger: {
            trigger: element
          }
        });
      });

      gsap.utils.toArray("[data-gsap-animate='zoom-in']").forEach(element => {
        gsap.from(element, {
          scale: 0.9,
          scrollTrigger: {
            trigger: element
          }
        });
      });

      gsap.utils.toArray("[data-gsap-animate='stagger-zoom-in']").forEach(element => {
        gsap.from(element.children, {
          scale: 0.9,
          opacity: 0,
          stagger: {
            amount: getStagger(element, 0.5),
            from: "random",
          },
          scrollTrigger: {
            trigger: element
          }
        });
      });

      const setupSplitTextAnimations = () => {
        gsap.utils.toArray("[data-gsap-animate='split-text']").forEach(element => {
          const allowedSplitTypes = ["chars", "lines"];

          // get the splitby data-attribute
          const splitType = element.dataset.gsapSplitby;
          if (!allowedSplitTypes.includes(splitType)) return console.warn(`Invalid splitby value: ${splitType}`);

          if (splitType === "chars") {
            const splitText = new SplitText(element, { type: "chars" });
            splitTexts.push(splitText);
            gsap.from(splitText.chars, {
              opacity: 0,
              yPercent: "random([-100, 100])",
              stagger: {
                amount: 0.5,
                from: "random",
              },
              scrollTrigger: {
                trigger: element
              }
            });
          }

          if (splitType === "lines") {
            const splitText = new SplitText(element, { type: "lines" });
            splitTexts.push(splitText);
            gsap.from(splitText.lines, {
              opacity: 0,
              yPercent: "100",
              stagger: {
                amount: 0.5,
              },
              scrollTrigger: {
                trigger: element
              }
            });
          }
        });
      };

      const startSplitTextAnimations = () => {
        if (document.fonts?.ready) {
          document.fonts.ready.then(() => setupSplitTextAnimations());
        } else {
          setupSplitTextAnimations();
        }
      };

      startSplitTextAnimations();

      mm = ScrollTrigger.matchMedia({

        // Desktop
        "(min-width: 1200px)": function () {

          Array.from(document.querySelectorAll("[data-gsap-trigger]")).forEach(element => {
            const targetId = element.dataset.gsapTrigger;
            const triggerTarget = document.getElementById(targetId);

            if (!targetId || !triggerTarget) {
              console.warn(`GSAPController: No trigger element found for data-gsap-trigger="${triggerId}"`);
              return
            }

            ScrollTrigger.create({
              trigger: element,
              start: "top top",
              end: "bottom bottom",
              pin: triggerTarget,
              pinSpacing: false
            });

          });          
        },

        "(max-width: 1199px)": function () {

        }
      });

      // Delay to ensure DOM + layout is stable
      initFrame = requestAnimationFrame(() => {
        initTimer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      });

      // Refresh after full load (images/fonts)
      window.addEventListener("load", ScrollTrigger.refresh);

      // Handle resize / orientation change properly
      handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 150);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(initFrame);
        clearTimeout(initTimer);
        clearTimeout(resizeTimer);
        if (mm) {
          mm.revert();
        }

        splitTexts.forEach(splitText => splitText.revert());
        ScrollTrigger.getAll().forEach(t => t.kill());
        window.removeEventListener("load", ScrollTrigger.refresh);
        window.removeEventListener("resize", handleResize);
      };
    }

    return init();
  }, [currentPath]); // Re-run effect on route change

  return null;
}
