import React from 'react'
import './portofolio.css'
import Clustering from '../../assets/Poster Clustering.png'
import VOrgreens from '../../assets/Poster VOrgreens.png'

const data = [
  {
    id: 1,
    image: Clustering,
    title: 'Paper Machine Learning Clustering',
    link: 'https://www.notion.so/irsyadkusnadi/Website-VOrgreens-7abdc2eff9f24f36ae3e7b0ddb9a6949?pvs=4'
  },
  {
    id: 1,
    image: VOrgreens,
    title: 'Interactive Website Project VOrgreens',
    link: 'https://www.notion.so/irsyadkusnadi/Paper-Model-Machine-Learning-Untuk-Dampak-Banjir-di-Jakarta-Menggunakan-Pendekatan-Clustering-6bb127e717c64a068c26aa0f095be5fe?pvs=4'
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio_container">
        {
          data.map(({id, image, title, link}) => {
            return (
              <article key={id} className='portofolio_item'>
                <div className="portofolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="potofolio_item-cta"> 
                  <a href={link} className='btn btn-primary' target='_blank'>More</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio