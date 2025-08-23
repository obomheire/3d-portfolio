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
                src="/images/project1.png"
                alt="Project 1"
              />
            </div>
            <h2>Project 1</h2>
          </div>

          <div className="project" ref={project2Ref}>
            <div className="image-wrapper bg-[#FFE7EB]">
              <img src="/images/project2.png" alt="Project 2" />
            </div>
            <h2>Project 2</h2>
          </div>

          <div className="project" ref={project3Ref}>
            <div className="image-wrapper bg-[#E7FFE7]">
              <img src="/images/project3.png" alt="Project 3" />
            </div>
            <h2>Project 3</h2>
          </div>

          <div className="project" ref={project4Ref}>
            <div className="image-wrapper bg-[#E7F6FF]">
              <img src="/images/project1.png" alt="Project 4" />
            </div>
            <h2>Project 4</h2>
          </div>

          <div className="project" ref={project5Ref}>
            <div className="image-wrapper bg-[#F6E7FF]">
              <img src="/images/project2.png" alt="Project 5" />
            </div>
            <h2>Project 5</h2>
          </div>

          <div className="project" ref={project6Ref}>
            <div className="image-wrapper bg-[#FFF9E7]">
              <img src="/images/project3.png" alt="Project 6" />
            </div>
            <h2>Project 6</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;