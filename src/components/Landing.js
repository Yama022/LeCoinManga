import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import data from '../assets/data/categories.json'

export default function Landing({
    getAllTypes,
    types,
}) {
    
    useEffect(() => {
        getAllTypes(data);
    }, [getAllTypes]);

    // Hide NSFW categories from the landing page if the user is not logged in
    const categories = types.filter((category) => !category.is_nsfw)

    return (
        <div className='Landing'>
            
            <div className="Landing__introduction">
                <h2 className="Landing__introduction__title">Acheter et Vendez vos mangas entre passionnés</h2>
                <div className="Landing__introduction__post">
                    Déposer une annonce
                </div>
            </div>

            <div className="Landing__categories">
                <h2 className="Landing__categories__title">Trouver votre prochain coup de coeur parmi les {categories.length} catégories disponibles</h2>
                <ul className="Landing__categories__list">
                    {categories.slice(0, 8).map((category, index) => (
                        <li key={index} className="Landing__categories__list__item">
                            <Link to={`/category/${category.label}`} className="Landing__categories__list__item__link">
                                <img src={require(`../assets/images/categories/${category.label}.png`)} alt={category.name} />
                                <span>{category.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}