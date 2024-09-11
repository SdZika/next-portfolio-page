import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
  } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="border-t border-gray-600 max-w-[1200px] sm:h-[150px] p-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center mx-auto">
      <span className="primary-color mb-4 sm:mb-0">M.Z</span>
      <p className="text-gray-600 sm:text-left mb-4 sm:mb-0">
        markozivkovic1982@gmail.com <br />{" "}
        <span className="block text-center">#webDev2024</span>
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/marko.zivkovic.3591/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-gray-600 hover:text-blue-600" />
        </a>
        <a
          href="https://www.instagram.com/markozivkovic1982/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-gray-600 hover:text-pink-600" />
        </a>
        <a
          href="https://x.com/MarkoZi31606687?t=PzHpm1DFgZevKuy9sSBJxw&s=03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-gray-600 hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-gray-600 hover:text-blue-700" />
        </a>{" "}
        <a
          href="https://github.com/SdZika"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-gray-600 hover:text-blue-700" />
        </a>
      </div>
    </div>
  )
}
