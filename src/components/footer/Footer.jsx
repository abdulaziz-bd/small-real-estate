import logoImage from "../../assets/images/logo/logo.svg";
import FacebookIconSvg from "../../assets/svg/common/FacebookIconSvg";
import InstagramIconSvg from "../../assets/svg/common/InstagramIconSvg";
import LinkedinIconSvg from "../../assets/svg/common/LinkedinIconSvg";
import TwitterIconSvg from "../../assets/svg/common/TwitterIconSvg";
import Blog from "./Blog";

export default function Footer() {
  return (
    <footer
      id="footer"
      className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a href="#" className="mb-6 inline-block  max-h-[100px]">
                <img src={logoImage} alt="logo" className="max-w-full" />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <a
                  href="https://www.facebook.com/"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <FacebookIconSvg />
                </a>
                <a
                  href="https://twitter.com/"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <TwitterIconSvg />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <InstagramIconSvg />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <LinkedinIconSvg />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                <li>
                  <a
                    href="#home"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Features
              </h4>
              <ul>
                <li>
                  <a
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <Blog />
          </div>
        </div>
      </div>
    </footer>
  );
}
