// == Import
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from 'src/components/Header';
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

