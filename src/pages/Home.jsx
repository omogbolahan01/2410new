import React, { useRef } from "react";
export default function Home() {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavItemClick = (section) => {
    scrollToRef(sectionRefs[section]);
  };

  return (
    <div className="homepage">
      <div className="absolute">
        <img src="/images/Ellipse 2.png" alt="" />
      </div>
      <nav>
        <div className="site-logo">
          <img src="/images/flower.png" alt="" />
        </div>
        <div className="nav-description">
          <ul>
            <li>
              <p onClick={() => handleNavItemClick("section1")}>Collection</p>
            </li>
            <li>
              <p onClick={() => handleNavItemClick("section2")}>Experience</p>
            </li>
            <li>
              <p onClick={() => handleNavItemClick("section3")}>Shop</p>
            </li>
            <li>
              <p onClick={() => handleNavItemClick("section4")}>FAQ</p>
            </li>
            <li>
              <p onClick={() => handleNavItemClick("section5")}>About</p>
            </li>
            <li>
              <p onClick={() => handleNavItemClick("section6")}>Contact</p>
            </li>
          </ul>
        </div>
        <div className="home-image">
          <div className="h1">
            <img src="/images/search.png" alt="" />
          </div>
          <div className="h1">
            <img src="/images/shopping.png" alt="" />
          </div>
        </div>
      </nav>
      <div className="home-front">
        <div className="home-first">
          <div className="absolutee">
            <img src="/images/Ellipse 1 (4).png" />
          </div>
          <div className="grid-1">
            <h3 className="my-header">Radiant Glow Skincare</h3>
            <p className="my-header">
              we believe that every individual deserves to feel confident in
              their own skin. Our mission is to provide you with high-quality
              skincare products that deliver effective results, helping you
              achieve a radiant and healthy complexion.
            </p>
            <div className="first-button">
              <button>
                <img src="/images/Frame 3 (2).png" />
              </button>
              <p>View services</p>
            </div>
            <div className="first-numbers">
              <div className="f1">
                <h3 className="my-header">23K+</h3>
                <p className="my-header">Customer Ratings </p>
              </div>
              <div className="empty"></div>
              <div className="f1">
                <h3 className="my-header">30K+</h3>
                <p className="my-header">Happy customer</p>
              </div>
              <div className="empty"></div>
              <div className="f1">
                <h3 className="my-header">500+</h3>
                <p className="my-header">Online orders</p>
              </div>
            </div>
          </div>
          <div className="grid-2">
            <img src="/images/Rectangle 2 (2).png" alt="" />
            <div className="frame">
              <img src="/images/Rectangle 3 (4).png" />
            </div>
            <div className="frame2">
              <img src="/images/Star 1 (1).png" />
            </div>
          </div>
        </div>
      </div>
      <section ref={sectionRefs.section1} className="collections">
        <div className="collection-one">
          <h4 className="my-header">PRODUCT</h4>
          <h3 className="my-header">New collections</h3>
          <button>
            <img src="/images/Frame 3 (3).png" alt="" />
          </button>
        </div>
        <div className="collection-two">
          <div className="two-one">
            <img src="/images/Rectangle 20 (8).png" alt="" />
            <h2>Pantic Salima</h2>
            <p>
              Self-discovery as you engage in a comprehensive consultation
              session with our team of skincare experts.{" "}
            </p>
          </div>
          <div className="two-one">
            <img src="/images/Rectangle 20 (6).png" alt="" />
            <h2>Lavisa Matins</h2>
            <p>
              Self-discovery as you engage in a comprehensive consultation
              session with our team of skincare experts.{" "}
            </p>
          </div>
          <div className="two-one">
            <img src="/images/Rectangle 20 (8).png" alt="" />
            <h2>Plutomania</h2>
            <p>
              Self-discovery as you engage in a comprehensive consultation
              session with our team of skincare experts.{" "}
            </p>
          </div>
          <div className="two-one">
            <img src="/images/Rectangle 20 (8).png" alt="" />
            <h2>Pantic Salima</h2>
            <p>
              Self-discovery as you engage in a comprehensive consultation
              session with our team of skincare experts.{" "}
            </p>
          </div>
          <div className="two-one">
            <img src="/images/Rectangle 20 (6).png" alt="" />
            <h2>Lavisa Matins</h2>
            <p>
              Self-discovery as you engage in a comprehensive consultation
              session with our team of skincare experts.{" "}
            </p>
          </div>
          <div className="two-one">
            <img src="/images/Rectangle 20 (8).png" alt="" />
            <h2>Plutomania</h2>
            <p>
              Self-discovery as you engage in a comprehensive consultation
              session with our team of skincare experts.{" "}
            </p>
          </div>
        </div>
      </section>
      <section ref={sectionRefs.section2} className="experience">
        <div className="experience-first">
          <h4>
            Experience the transformative power of Radiant Glow Skincare and
            join our community of skincare enthusiasts
          </h4>
        </div>
        <div className="experience-second">
          <div className="oone">
            <img src="/images/image 16 (2).png" alt="" />
            <div className="onee-price my-header">
              <h4 className="my-header">Malliano</h4>
              <p className="my-header">£230</p>
            </div>
            <p className="my-header">
              Moisturizing properties, coconut oil helps to hydrate and soften
              the skin while effectively removing makeup and impurities.
            </p>
          </div>
          <div className="twoo">
            <img src="/images/image 17 (1).png" alt="" />
            <div className="onee-price my-header">
              <h4 className="my-header">Karibu</h4>
              <p className="my-header">£299</p>
            </div>
            <p className="my-header">
              Moisturizing properties, coconut oil helps to hydrate and soften
              the skin while effectively removing makeup and impurities.
            </p>
          </div>
          <div className="threee">
            <img src="/images/image 18 (2).png" alt="" />
            <div className="onee-price my-header">
              <h4 className="my-header">Auraa</h4>
              <p className="my-header">£156</p>
            </div>
            <p className="my-header">
              Moisturizing properties, coconut oil helps to hydrate and soften
              the skin while effectively removing makeup and impurities.
            </p>
          </div>
        </div>
      </section>
      <section ref={sectionRefs.section3} className="shop">
        <div className="shop-text my-header">
          <h3 className="my-header">Skin Collection</h3>
          <button>
            <img src="/images/Frame 3 (4).png" alt="" />
          </button>
        </div>
        <div className="shop-flex">
          <div className="flex-one">
            <div className="oooo">
              <img src="/images/Rectangle 15.png" alt="" />
              <div className="oooo-text">
                <h4 className="my-header">Tamara Polo</h4>
                <p className="my-header">£230</p>
              </div>
            </div>
            <div className="oooo">
              <img src="/images/Rectangle 15 (1).png" alt="" />
              <div className="oooo-text">
                <h4 className="my-header">Tamzan</h4>
                <p className="my-header">£23</p>
              </div>
            </div>
            <div className="oooo">
              <img src="/images/Rectangle 15 (2).png" alt="" />
              <div className="oooo-text">
                <h4 className="my-header">Nax Polo</h4>
                <p className="my-header">£34</p>
              </div>
            </div>
            <div className="oooo">
              <img src="/images/Rectangle 15 (3).png" alt="" />
              <div className="oooo-text">
                <h4 className="my-header">Mag Slim</h4>
                <p className="my-header">£90</p>
              </div>
            </div>
          </div>
          <div className="flex-two">
            <div className="oooo">
              <img src="/images/Rectangle 15 (4).png" alt="" />
              <div className="oooo-text">
                <h4 className="my-header">Botanical consin</h4>
                <p className="my-header">£450</p>
              </div>
            </div>
            <div className="oooo">
              <img src="/images/Rectangle 15 (5).png" alt="" />
              <div className="oooo-text">
                <h4 className="my-header">LS syrm</h4>
                <p className="my-header">£30</p>
              </div>
            </div>
            <div className="oooo">
              <img src="/images/Rectangle 15 (6).png" alt="" />
              <div className="oooo-text">
                <h4 className="my-header">Botanical nody</h4>
                <p className="my-header">£50</p>
              </div>
            </div>
            <div className="oooo">
              <img src="/images/Rectangle 15 (7).png" alt="" />
              <div className="oooo-text">
                <h4 className="my-header">Green Pil</h4>
                <p className="my-header">£80</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={sectionRefs.section4} className="faq">
        <div className="faq-text">
          <div className="text-1">
            <h4>
              Experience the luxury of our Radiant Glow Cleansing Balm a silky
              smooth formula designed to gently cleanse and nourish your skin
            </h4>
          </div>
          <div className="text-2">
            <div className="text-color">
              <div className="color-1"></div>
              <h3 className="my-header">Dark</h3>
            </div>
            <div className="text-color">
              <div className="color-2"></div>
              <h3 className="my-header">Brown</h3>
            </div>
            <div className="text-color">
              <div className="color-3"></div>
              <h3 className="my-header">Light</h3>
            </div>
          </div>
        </div>

        <div className="faq-image">
          <div className="iiii">
            <img src="/images/Vector (29).png" alt="" />
          </div>
        </div>
      </section>
      <section ref={sectionRefs.section5} className="about">
        <div className="about-text">
          <h3 className="my-header">
            For Brighter glowing and healthy looking skin
          </h3>
          <p className="my-header">
            Dive into a world of unparalleled rejuvenation and discover our
            meticulously crafted skincare treasures, designed to elevate your
            natural radiance to dazzling new heights. Delve into a realm where
            every product is meticulously formulated to deliver transformative
            results, unveiling a complexion that exudes luminosity and vitality.
          </p>
        </div>
        <div className="about-image">
          <div className="aaaa">
            <img src="/images/Rectangle 14 (4).png" alt="" />
            <h4 className="my-header">Bright</h4>
          </div>
          <div className="aaaa">
            <img src="/images/Rectangle 14 (5).png" alt="" />
            <h4 className="my-header">Healthy</h4>
          </div>
          <div className="aaaa">
            <img src="/images/Rectangle 14 (6).png" alt="" />
            <h4 className="my-header">Glowing</h4>
          </div>
        </div>
      </section>
      <section ref={sectionRefs.section6} className="contact">
        <div className="contact-one">
          <h3 className="my-header">Skin consultation and therapy </h3>
          <p>
            Empower Your Skin's Journey: Expert Guidance and Tailored
            Therapeutic Solutions Through Comprehensive Skin Consultation and
            Therapy Sessions, Designed to Illuminate, Nourish, and Elevate Your
            Skin's Health and Beauty
          </p>
          <p>
            Embark on a journey of self-discovery as you engage in a
            comprehensive consultation session with our team of skincare
            experts. We understand that every individual is unique, and so is
            their skin. Our goal is to delve deep into your skin's needs,
            concerns, and aspirations to create a customized skincare plan that
            addresses your specific goals.
          </p>
          <button>
            <img src="/images/Frame 3 (5).png" alt="" />
          </button>
        </div>
        <div className="contact-two">
          <img src="/images/Group 8 (1).png" alt="" />
        </div>
      </section>
      <footer>
        <div className="nav2">
          <div className="site-logo">
            <img src="/images/flower-fil.png" alt="" />
          </div>
          <div className="nav-description2">
            <ul>
              <li>
                <p onClick={() => handleNavItemClick("section1")}>Collection</p>
              </li>
              <li>
                <p onClick={() => handleNavItemClick("section2")}>Experience</p>
              </li>
              <li>
                <p onClick={() => handleNavItemClick("section3")}>Shop</p>
              </li>
              <li>
                <p onClick={() => handleNavItemClick("section4")}>FAQ</p>
              </li>
              <li>
                <p onClick={() => handleNavItemClick("section5")}>About</p>
              </li>
              <li>
                <p onClick={() => handleNavItemClick("section6")}>Contact</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="socials">
          <div></div>
          <div className="social-flex">
            <img src="/images/twitter-fill.png" alt="" />
            <img src="/images/linkedin.png" alt="" />
            <img src="/images/facebook.png" alt="" />
            <img src="/images/messenger-fill.png" alt="" />
          </div>
        </div>
        <div className="empty2"></div>
        <div className="last-part">
          <h3>(r) skincare 2024</h3>
        </div>
      </footer>
    </div>
  );
}
