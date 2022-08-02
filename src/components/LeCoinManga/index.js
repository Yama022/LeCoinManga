// == Import

import Header from 'src/components/Header';
import Mangas from 'src/components/Mangas';
import './styles.scss';

// == Composant
const LeCoinManga = () => (
  <div className="lecoinmanga">
    <Header />
    <Mangas />
  </div>
);

// == Export
export default LeCoinManga;
