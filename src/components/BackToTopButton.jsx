import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [btnVisiblity, setBtnVisiblity] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const toggleVisiblity = () => {
      window.scrollY > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
    };
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);

  return (
    <button onClick={handleScroll} className={`transition-all ${
      btnVisiblity ? "translate-y-0" : "-translate-y-[100vh]"
    } z-40 fixed bottom-2 right-2 xs:bottom-[1.3rem] xs:right-[1.3rem] md:bottom-4 md:right-4 w-8 h-8 flex justify-center items-center rounded-full bg-secondary cursor-pointer  hover:scale-[1.08] duration-500 text-white`}>
        <span className="fa-solid fa-chevron-up" />
    </button>
  );
};

export default BackToTopButton;
