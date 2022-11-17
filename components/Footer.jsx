import Image from 'next/image';

import images from '../assets';
import Button from './Button';

const FooterLink = ({ heading, items }) => (
  <div className="sm:mx-4 text-black">
    <h3 className="text-xl font-semibold font-poppins mb-8 ">
      {heading}
    </h3>
    {items.map((item, index) => (
      <p
        key={index}
        className="hover:cursor-pointer font-poppins font-normal my-3 hover:text-prim-black-1"
      >
        {item}
      </p>
    ))}
  </div>
);
const Footer = () => {
  

  return(
    <footer className="flex justify-center items-center flex-col border-t bg-white border-prim-gray-1 sm:py-8 py-16 w-full ">
    
     {/* ===================Footer UpperSecTion=================== */}
    <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">

    {/* ===================Left Column=================== */}
    <div className="flex justify-start items-start flex-1 flex-col">

  {/* ===================Brand=================== */}
    <div className="flex justify-center items-center">
    
    <Image
      src={images.logo}
      objectFit="contain"
      width={32}
      height={32}
      alt="logo"/>

    <p className="font-semibold text-lg ml-1">
        FrUIT
    </p>
    </div>


   {/* ===================Get Email=================== */}
    <p className="font-poppins font-semibold mt-6 text-base">Get the latest updates</p>
    <div className="flex justify-center items-center md:w-full minlg:w-557 w-357 mt-6 bg-white border  border-prim-gray-2 rounded-md ">
    <input
      type="email"
      placeholder="Your Email"
      className="h-full flex-1 w-full font-normal text-xs minlg:text-lg outline-none  pl-4"
    />
    <div className="flex-initial">
    <Button
      btnName="Email Me"
      classStyles="rounded-md"
    />
    </div>
    </div>

  

{/* ===================Right Column=================== */}
  <div className="flex-1 flex justify-between items-start ml-10 md:ml-0 md:mt-8">
  <FooterLink heading="FrUIT" items={['Explore', 'How its work', 'Contact Us']} />
  <FooterLink heading="Team 5" items={['Luu Huynh Phat','Nguyen Van Chon','Nguyen Minh Quan','Nguyen Ngoc Mai Khanh','Hoang Tuan Anh']} />
  </div>

  </div>

  <div className="flex justify-center items-center w-full mt-5 border-t  bg-white  border-prim-gray-1 sm:px-4 px-16">
  <div className="flex justify-between items-center flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
  <p className="font-poppins font-semibold text-base">FrUIT, Inc. All Rights Reserved</p>
  <div className="flex flex-row sm:mt-4">
    {[images.instagram, images.twitter, images.telegram, images.discord, images.facebook].map(
      (image, index) => (
        
          <Image
            key={index}
            src={image}
            objectFit="contain"
            width={25}
            height={25}
            alt="social"
          />
         
      ),
    )}
  </div>

  </div>
  </div>
  </div>
  </footer>
    );
}

export default Footer