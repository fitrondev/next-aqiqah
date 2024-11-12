import Logo from "@/components/common/Logo";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="container py-5 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="bg-white py-2 px-4 rounded-full mb-4 md:mb-0">
            <Logo />
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://www.facebook.com/aqiqahlombok"
              className="hover:text-white transition-colors">
              <FaFacebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/aqiqahlombokofficial/"
              className="hover:text-white transition-colors">
              <FaInstagram className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/aqiqahlombok"
              className="hover:text-white transition-colors">
              <FaTwitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.youtube.com/@aqiqahlombok"
              className="hover:text-white transition-colors">
              <FaYoutube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-background pt-8 flex flex-col md:flex-row justify-between items-center font-semibold">
          <div className="text-sm">
            © {new Date().getFullYear()} Aqiqah Lombok. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
