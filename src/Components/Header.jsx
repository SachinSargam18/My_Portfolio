import React, { useRef, useEffect } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ================ logo ================ */}
          <div className="flex items-center gap-[8px]">
            <span className=" w-[35px] h-[35px] rounded-full flex items-center justify-center bg-primaryColor font-[500] text-white text-[18px]">
              S
            </span>
            <div className="leading-4 h-[45px] w-[45px]">
              <div>
                <h2 className="text-lg text-smallTextColor font-[900]">
                  Sachin
                </h2>
              </div>
              <div>
                <p className="text-smallTextColor text-[11px] font-[500] flex left-[15px] leading-[0.2rem] ">
                  Personal
                </p>
              </div>
            </div>
          </div>

          {/* ================ logo end ============*/}
          {/* ====================Menu Start ================== */}
          <div className="menu " ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ====================Menu End ================== */}

          {/* ====================Menu Right ================== */}
          <div className="flex items-center justify-around gap-4">
            <a href="https://discord.com/channels/@sachinsargam#7810" target="blank">
              <button
                className=" flex items-center gap-2 text-smallTextColor font-[600] border 
                border-solid border-smallTextColor py-2 px-4 rounded-[8px] 
                max-h-[40px] hover:bg-smallTextColor
                hover:text-white hover:font-[500] ease-in duration-300"
              >
                <i class="ri-discord-line"></i> Let's Talk
              </button>
            </a>

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i class="ri-menu-line"></i>
            </span>
          </div>

          {/* ====================Menu End ================== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
