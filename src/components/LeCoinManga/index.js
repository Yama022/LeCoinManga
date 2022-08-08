// == Import
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from 'src/components/Header'
import Annonce from 'src/components/Header/annonce'
import Favoris from 'src/components/Header/favoris'
import Profil from 'src/components/Header/profil'
import Panier from 'src/components/Header/panier'
import Mangas from 'src/components/Mangas'
import Description from 'src/components/Mangas/description'
import Footer from 'src/components/Footer'
import './styles.scss'

// == Composant
export default function LeCoinManga() {
  return (
    <div className="lecoinmanga">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Mangas} />
          <Route exact path="/annonce" component={Annonce} />
          <Route exact path="/favoris" component={Favoris} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/panier" component={Panier} />
          <Route exact path="/manga/:id" component={Description} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
