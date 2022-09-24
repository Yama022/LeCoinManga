import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function CategoriesSlider({ categories }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ul className="Landing__categories__list">
      <Slider className="Landing__categories__list" {...settings}>
        {categories.map((category, index) => (
          <li key={index} className="Landing__categories__list__item">
            <Link
              to={`/category/${category.id}`}
              className="Landing__categories__list__item__link">
              <img
                src={`../images/categories/${category.label}.png`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "../images/categories/default.png";
                }}
                alt={category.name}
              />
              <span>{category.name}</span>
            </Link>
          </li>
        ))}
      </Slider>
    </ul>
  );
}
