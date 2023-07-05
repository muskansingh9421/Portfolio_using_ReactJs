import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proj1.png'
import IMG2 from '../../assets/proj2.png'
import IMG3 from '../../assets/proj3.png'
import IMG4 from '../../assets/proj4.png'
import IMG5 from '../../assets/proj5.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG1} alt=''/>
          <h3>Bookstore using MERN</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/muskansingh9421/Bookstore/tree/main' className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG2} alt=''/>
          <h3>Weather Website</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/muskansingh9421/weather_website' className='btn btn-primary' target='_blank'>Github</a>
          <a href='https://weather-website-one.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG3} alt=''/>
          <h3>Quiz Website</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/muskansingh9421/quiz_site' className='btn btn-primary' target='_blank'>Github</a>
          <a href='https://quiz-site-five.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG4} alt=''/>
          <h3>portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/muskansingh9421/portfolio_' className='btn btn-primary' target='_blank'>Github</a>
          <a href='https://portfolio-self-two-58.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={IMG5} alt=''/>
          <h3>Car_loan_EMI_calculator_app</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/muskansingh9421/Car_loan_EMI_calculator_app' className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio