import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, useLocation } from "react-router-dom";

interface CustomLink {
    label: string;
    path: string;
}

export default function NavMenu() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [open, setOpen] = useState<boolean>(false)
    const { pathname } = useLocation()
    const linkList: CustomLink[] = [
        { label: 'Inicio', path: '/' },
        { label: 'Hombre', path: '/hombre' },
        { label: 'Mujer', path: '/mujer' },
        { label: 'Niños', path: '/ninos' },
        { label: 'Contacto', path: '/contacto' }
    ];

    useEffect(() => {
        const handleResize = () => {
            const newWidth: number = window.innerWidth;
            setWidth(newWidth);
            setOpen(false)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    const handleMenu = () => {
        let newValue = !open
        setOpen(newValue)
    }

    return (
        <>
            {
                width < 1024 ? (
                    <button
                        onClick={handleMenu}
                        className={`order-1 text-white ${open ? 'rotate-90' : 'rotate-0'} ease-out duration-300`}
                    >
                        {
                            !open ? (
                                <MenuIcon
                                    fontSize="large"
                                />
                            ) : (
                                <CloseOutlinedIcon
                                    fontSize="large"
                                />
                            )
                        }

                    </button>
                ) : (
                    <div className="lg:order-2 lg:w-8/12 flex items-center justify-evenly">
                        {
                            linkList.map((navLink, index: number) => (
                                <Link
                                    key={`${index}-${navLink.label}`}
                                    to={navLink.path}
                                    className="text-lg py-2 hover:font-bold text-mainColor ease-out duration-300"
                                >
                                    {navLink.label}
                                </Link>
                            ))
                        }
                    </div>
                )
            }

            <div className={`absolute w-full top-full bg-textMain text-white font-medium overflow-hidden ease-out duration-300
                    ${open ? 'h-64 z-50 border-b-4 border-mainColor' : 'h-0'}
                `}>
                <div className="flex flex-col justify-evenly h-full px-6">
                    {
                        linkList.map(({ label, path }, index: number) => (
                            <Link
                                key={`${index}-${label}`}
                                to={path}
                                className="w-full text-center rounded-xl py-2 hover:text-textMain hover:bg-white hover:font-bold ease-out duration-300"
                            >
                                {label}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
