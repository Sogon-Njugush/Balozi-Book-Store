import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Educational Books</Link>
            <Link href="#">Books</Link>
            <Link href="#">Stationery</Link>
            <Link href="#">Watches</Link>
            <Link href="#">CBC Material</Link>
            <Link href="#">ECDE Materials</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Dive into the rich tapestry of literature at Balozi Book Store,
              your premier destination for all things literary. As your ultimate
              hub for exploration and discovery, Balozi invites you to explore
              our carefully curated shelves brimming with literary gems. Whether
              you crave the pulse-pounding excitement of bestsellers or the
              timeless allure of classics, we have something to satisfy every
              reader's appetite. With a team of passionate book enthusiasts at
              your service, you'll receive personalized recommendations and
              expert guidance to enhance your reading journey. Step through the
              doors of Balozi Book Store and prepare to be transported to a
              realm of imagination and enlightenment, where each book holds the
              promise of a new adventure
            </p>
            <p>
              &copy; {new Date().getFullYear()} Balozi Book Store. All rights
              reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
