import logoImage from "../../assets/images/logo/logo.svg";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a
              href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img src={logoImage} className="header-logo h-12" />
            </a>

            <ul className="hidden lg:flex ">
              <li className="group relative">
                <Button
                  url="#home"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                  text="Home"
                />
              </li>
              <li className="group relative">
                <Button
                  url="#about"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  text="About"
                />
              </li>
              <li className="group relative">
                <Button
                  url="#pricing"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  text="Pricing"
                />
              </li>

              <li className="group relative">
                <Button
                  url="blog-grids.html"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  text="Blog"
                />
              </li>
            </ul>

            <div className="sm:flex">
              <Button
                url="signin.html"
                className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                text="Sign In"
              />
              <Button
                url="signup.html"
                className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                text="Sign Up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
