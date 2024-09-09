import { Link } from "react-router-dom"

export default function Logo() {
    return (
        <Link
            to={'/'}
            className="order-2 lg:order-1 lg:w-2/12 w-fit m-auto"
        >
            <picture>
                <source srcSet="/common/Logo-sm.ico" media="(max-width: 1023px)" />
                <img src="/common/Logo.png" alt="" className="object-cover h-16 mx-auto lg:h-20" />
            </picture>

            {/* <img
                src={imgUrl}
                alt={document.title}
                className="object-cover max-h-16 mx-auto"
            /> */}
        </Link>
    )
}
