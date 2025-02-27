import headerLogo from '../assets/more/logo1.png';
import headerBg from '../assets/more/15.jpg';

const Header = () => {
    return (
        <div
            className='flex justify-center items-center p-2 text-white'
            style={{
                backgroundImage: `url(${headerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#3d2b1f', // Fixed background color
            }}
        >
            <img className='h-[90px] w-[75px] mr-4' src={headerLogo} alt="Logo" />
            <h2 className='text-6xl'>Espresso Emporium</h2>
        </div>
    );
};

export default Header;
