import footerImg from '../assets/more/logo1.png'
import { CiFacebook, CiTwitter, CiLinkedin, CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import footerBg from '../assets/more/13.jpg'
const Footer = () => {
    return (
        <div style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#3d2b1f', // Fixed background color
        }}>
            <div className='flex max-w-6xl justify-center items-center mx-auto py-20'>
                {/* Left Section */}
                <div className='flex flex-col gap-y-6 w-1/2'>
                    <img className='h-[90px] w-[75px]' src={footerImg} alt="" />
                    <h2 className='text-4xl'>Espresso Emporium</h2>
                    <p>
                        Always ready to be your friend. Come & Contact with us to share your <br />
                        memorable moments, to share with your best companion.
                    </p>
                    <div className='flex gap-3'>
                        <CiFacebook className='h-[40px] w-[40px]' />
                        <CiTwitter className='h-[40px] w-[40px]' />
                        <CiLinkedin className='h-[40px] w-[40px]' />
                        <CiLinkedin className='h-[40px] w-[40px]' />
                    </div>
                    {/* Contact Information */}
                    <div className='flex flex-col space-y-5'>
                        <h2 className='text-2xl'>Get in Touch</h2>
                        <div className='flex flex-col gap-y-2'>
                            <p className='flex items-center'>
                                <FaPhoneAlt className='h-[21px] w-[21px] mr-2' /> +88 01533 333 333
                            </p>
                            <p className='flex items-center'>
                                <MdOutlineEmail className='h-[21px] w-[21px] mr-2' /> info@gmail.com
                            </p>
                            <p className='flex items-center'>
                                <CiLocationOn className='h-[21px] w-[21px] mr-2' /> 72, Wall street, King Road, Dhaka
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section (Form) */}
                <div className='w-1/2'>
                    <h2 className="text-2xl mb-3">Connect with Us</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <textarea
                            placeholder="Message"
                            className="p-2 border border-gray-300 rounded-md h-32"
                        ></textarea>
                        <button
    type="submit"
    className="p-2 text-sm w-[70px] bg-blue-500 text-white rounded-md hover:bg-blue-600"
>
    Submit
</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;