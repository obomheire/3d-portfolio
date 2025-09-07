import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  const project6Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
      project6Ref.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="project" ref={project1Ref}>
            <div className="image-wrapper bg-[#FFEFDB]">
              <img
                src="/images/ai-photo-craft.png"
                alt="AI Photo Craft"
              />
            </div>
            <h2>AI Photo Craft (Next-gen AI image editing)</h2>
          </div>

          <div className="project" ref={project2Ref}>
            <div className="image-wrapper bg-[#FFE7EB]">
              <img src="/images/health-bridge.png" alt="Health Bridge" />
            </div>
            <h2>Health Bridge (Reliable healthcare at your fingertips)</h2>
          </div>

          <div className="project" ref={project3Ref}>
            <div className="image-wrapper bg-[#E7FFE7]">
              <img src="/images/snip-url.png" alt="Snip URL" />
            </div>
            <h2>Snip URL (The only URL shortening you'll ever need)</h2>
          </div>

             <div className="project" ref={project3Ref}>
            <div className="image-wrapper bg-[#E7FFE7]">
              <img src="/images/snip-url.png" alt="Snip URL" />
            </div>
            <h2>Snip URL (The only URL shortening you'll ever need)</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppShowcase;