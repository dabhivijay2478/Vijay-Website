import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div class="text-center mb-5">
        <ul class="flex justify-center mt-2 space-x-5">
          <li>
            <a
              href="https://linkedin.com/in/vijaydabhi"
              class="text-gray-500 hover:text-white"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dabhivijay2478"
              class="text-gray-500 hover:text-white"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/vijaydabhi28"
              class="text-gray-500 hover:text-white"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
