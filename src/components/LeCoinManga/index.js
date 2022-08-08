// == Import
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from 'src/components/Header';
import Annonce from 'src/components/Header/annonce';
import Favoris from 'src/components/Header/favoris';
import Profil from 'src/components/Header/profil';
import Panier from 'src/components/Header/panier';
import Mangas from 'src/components/Mangas';
import Description from 'src/components/Mangas/description';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
export default function LeCoinManga() {
  return(
  <div className="lecoinmanga">
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Header />
          <Mangas />
          <Footer />
        </Route>

        <Route path="/annonce">
          <Header />
          <Annonce />
          <Footer />
        </Route>

        <Route path="/favoris">
          <Header />
          <Favoris />
          <Footer />
        </Route>

        <Route path="/profil">
          <Header />
          <Profil />
          <Footer />
        </Route>

        <Route path="/panier">
          <Header />
          <Panier />
          <Footer />
        </Route>

        <Route path="/manga">
          <Header />
          <Description />
          <Footer />
        </Route>

      </Switch>
    </BrowserRouter>
  </div>
  )
};

// == Export

