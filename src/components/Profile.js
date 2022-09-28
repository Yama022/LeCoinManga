import { Link } from 'react-router-dom';

export default function Profile({ user, announcement }) {
  console.log(announcement)
  const { data } = user;
  const { user: userData } = data;
  // const { username, avatar_url: avatarUrl, bio, email, firstname, lastname, phone } = userData;
  // TODO: Finish this component
  const { username } = userData;

    return (
        <div className="Profile">
          <div className="Profile__container">
            <h1 className="Profile__container__username">
              <p>Hello</p> 
              <img src="../images/hand.gif" alt="hand" />
              {username}
            </h1>

            <div className="Profile__container__info">
              <h2 className="Profile__container__info__subtitle">Tu peux retrouver ici les annonces que tu as déposés</h2>
              <div className="Profile__container__info__content">
                <div className="Profile__container__info__content__item">
                  <h3 className="Profile__container__info__content__item__title">Annonces en cours : <span>{announcement.length}</span></h3>

                  <div className="Profile__container__info__content__item__create">
                    {announcement.length === 0 ? 
                      <>
                        <p className="Profile__container__info__content__item__create__text">Tu n'as pas encore déposé d'annonce</p>
                        <Link to="/form" className="button dark-blue">Déposer une annonce</Link>
                      </>
                      : announcement.map((item) => (
                        <div className="Profile__container__info__content__item__create__article">
                          <p className="Profile__container__info__content__item__create__article__title">{item.title}</p>
                          <p className="Profile__container__info__content__item__create__article__description">{item.description}</p>
                          <p className="Profile__container__info__content__item__create__article__price">{item.price} €</p>
                          <p className="Profile__container__info__content__item__create__article__status">{item.status}</p>
                          </div>
                      ))
                    }
                  </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
