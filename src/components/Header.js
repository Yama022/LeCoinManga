import { Link } from 'react-router-dom';

import { BiSearchAlt, BiUser, BiCart } from 'react-icons/bi';
import { GiStarsStack } from 'react-icons/gi';

export default function Header() {

    const navigationsLink = [
        {
            name: 'Profil',
            link: '/profile',
            icon: <BiUser />
        },
        {
            name: 'Favoris',
            link: '/favorites',
            icon: <GiStarsStack />
        },
        {
            name: 'Panier',
            link: '/cart',
            icon: <BiCart />
        }
    ]

    return (
        <header className='Header'>
            
            <h1 className='Header__title'>
                <Link to='/'>LeCoinManga</Link>
            </h1>

            <div className="Header__search">
                <input type="text" placeholder='Rechercher un manga...' />
                <div className="Header__search__button">
                    <BiSearchAlt />
                </div>
            </div>

            <nav className='Header__nav'>
                <ul className='Header__nav__list'>
                    {navigationsLink.map((link, index) => (
                        <li key={index} className='Header__nav__list__item'>
                            <Link className="Header__nav__list__item__link" to={link.link}>
                                <span className="Header__nav__list__item__link__icon">{link.icon}</span>
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
        </header>
    )
}