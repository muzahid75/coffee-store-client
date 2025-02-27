import headerLogo from '../assets/more/logo1.png';
import headerBg from '../assets/more/15.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignout = () => {
        signOutUser()
            .then(() => {
                // console.log('sign out successfully')
            })
            .catch(() => {
                // console.log(error);
            }
            )
    }
    return (
        <>
            <div
                className='flex justify-between items-center p-2 text-white'
                style={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#3d2b1f', // Fixed background color
                }}
            >
                <div>
                    {
                        user && <span>{user.email}</span>
                    }
                </div>
                <div>
                    <img className='h-[90px] w-[75px] mr-4' src={headerLogo} alt="Logo" />
                    <h2 className='text-6xl'>Espresso Emporium</h2>
                </div>
                <div className='flex gap-4'>
                    {
                        user ?
                            <>
                                <button onClick={handleSignout} className="btn">Signout</button>
                            </>
                            :
                            <Link to='/signIn'><button className='btn'>SignIn</button></Link>
                    }
                    <Link to='/signUp'><button className='btn'>SignUp</button></Link>
                </div>
            </div>

        </>
    );
};

export default Header;
