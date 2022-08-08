import data from 'src/data/data'
import Manga from './manga'

import './style.scss'

export default function Mangas() {
  return (
    <div className="mangas">
      {data.map((manga) => <Manga {...manga} key={manga.id} />)}
    </div>
  )
}
