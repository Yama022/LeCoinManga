import Manga from './manga'

import './style.scss'

export default function Mangas({ data }) {
  return (
    <div className="mangas">
      {data?.map((manga) => <Manga {...manga} key={manga.id} />)}
    </div>
  )
}
