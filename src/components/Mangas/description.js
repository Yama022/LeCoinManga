import jujutsu from 'src/assets/images/jujutsu_kaisen_01.jpg'
import japon from 'src/assets/images/japon.png'

import './style.scss'

export default function Description() {
  return (
    <div className="description">

      <div className="description__item">

        <div className="description__item__image">
          <img src={jujutsu} alt="jujutsu" />
        </div>

        <div className="description__item__content">
          <div className="description__item__content__title">
            <h1>Jujutsu Kaisen</h1>
          </div>

          <div className="description__item__content__origine">
            <p>Originie : <img src={japon} />Japon - 2018</p>
          </div>

          <div className="description__item__content__author">
            <p>Auteur : Akutami Gege</p>
          </div>

          <div className="description__item__content__type">
            <h2>Type: Shonen</h2>
          </div>

          <div className="description__item__content__price">
            <h3>Prix : 6,90€</h3>
          </div>

          <div className="description__item__content__age">
            <p>Âge conseillé : 12 ans et +</p>
          </div>

          <div className="description__item__content__description">
            <p>Chaque année au Japon, on recense plus de 10 000 morts inexpliquées et portés disparus.
              Dans la majorité des cas, ce sont les sentiments négatifs des êtres humains qui sont en cause. Souffrance, regrets, humiliation : leur accumulation dans un même endroit provoque des malédictions souvent fatales...
              C'est ce que va découvrir à ses dépens Yuji Itadori, lycéen et membre du club de spiritisme. Il ne croit pas aux fantômes, mais sa force physique hors du commun est un précieux atout pour les missions du groupe... jusqu'à ce que l'une d'elles tourne mal. La relique qu'ils dénichent, le doigt sectionné d'une créature millénaire, attire les monstres ! Le jeune homme n'hésite pas une seconde : il avale la relique pour conjurer le mauvais sort !
              Le voilà possédé par Ryomen Sukuna, le célèbre démon à deux visages. Contre toute attente, Yuji réussit à reprendre le contrôle de son corps. C'est du jamais vu ! Malgré tout, il est condamné à mort par l'organisation des exorcistes... Une sentence qui ne pourra être repoussée qu'à une seule condition : trouver et ingérer tous les doigts de Sukuna afin d'éliminer la menace une fois pour toutes. Et pour ça, l'adolescent va devoir s'initier à l'art occulte et mystérieux de l'exorcisme !
              Monstres assoiffés de sang, combats épiques et magie surpuissante : découvrez la nouvelle bombe dark fantasy ! Au cœur d'une lutte millénaire entre exorcistes et démons, comment garder son humanité alors même que le mal se tapit au plus profond de soi ?
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
