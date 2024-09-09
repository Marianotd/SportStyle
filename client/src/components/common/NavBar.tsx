import Logo from "./Logo";
import NavMenu from "./NavMenu";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function NavBar() {
    return (
        <nav className="container relative mx-auto grid grid-cols-3 lg:flex lg:justify-around items-center py-2 px-4">
            <Logo />

            <NavMenu />

            <div className="order-3 lg:w-2/12 flex justify-around items-center text-white lg:text-mainColor">
                <button>
                    <PersonOutlineOutlinedIcon fontSize="large" />
                </button>
                <button>
                    <ShoppingBagOutlinedIcon fontSize="large" />
                </button>
            </div>
        </nav>
    );
}
