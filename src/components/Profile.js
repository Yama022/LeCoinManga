// import hand from '../assets/images/hand.gif';

export default function Profile({ user }) {
  const { data } = user;
  const { user: userData } = data;
  // const { username, avatar_url: avatarUrl, bio, email, firstname, lastname, phone } = userData;
  // TODO: Finish this component
  const { username, email } = userData;

    return (
        <div className="Profile">
          <div className="Profile__container">
            <h1 className="Profile__container__username">
              <span>Hello
                {/* <img src={hand} alt="hand" /> */}
              </span> 
              {username}</h1>
            <span>mail : {email}</span>
            </div>
        </div>
    )
}
