// == Import
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from 'src/components/Header';
import Annonce from 'src/components/Header/annonce';
import Favoris from 'src/components/Header/favoris';
import Profil from 'src/components/Header/profil';
import Mangas from 'src/components/Mangas';
import Description from 'src/components/Mangas/description';
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
        </Route>

        <Route path="/annonce">
          <Header />
          <Annonce />
        </Route>

        <Route path="/favoris">
          <Header />
          <Favoris />
        </Route>

        <Route path="/profil">
          <Header />
          <Profil />
        </Route>

        <Route path="/manga">
          <Header />
          <Description />
        </Route>

      </Switch>
    </BrowserRouter>
  </div>
  )
};

// == Export

