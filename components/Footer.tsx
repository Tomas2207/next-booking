import { BookmarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row py-14 text-gray-600 items-start px-6 lg:px-24 xl:px-52 mx-auto justify-around">
        <div className="">
          <h2 className="flex text-2xl">
            <BookmarkIcon height={24} />
            Planner
          </h2>
          <p className="max-w-[20rem]">
            Stop delaying your search for happiness and start living your dreams
            now
          </p>
          <div className="flex gap-2 mt-2 mb-6">
            <AiFillInstagram className="text-4xl text-[#96CBBC]" />
            <FaFacebookSquare className="text-4xl text-[#96CBBC]" />
            <BsTwitter className="text-4xl text-[#96CBBC]" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Planner works</p>
            <p>News</p>
            <p>Investors</p>
            <p>Planner Plus</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">COMPANY</h5>
            <p>Why Planner?</p>
            <p>Work With Us</p>
            <p>FAQ</p>
            <p>Blog</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Account</p>
            <p>Support Center</p>
            <p>Feedback</p>
            <p>Contact Us</p>
            <p>Accessibility</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">GET IN TOUCH</h5>
            <p>Questions or feedback?</p>
            <p>We&apos;d love to hear from you</p>
            <div className="flex border border-neutral-400 rounded-full overflow-hidden px-2 py-1">
              <input
                type="text"
                placeholder="Email Adress"
                className="bg-transparent outline-none"
              />
              <PaperAirplaneIcon
                height={38}
                className="bg-[#96CBBC] rounded-full p-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
