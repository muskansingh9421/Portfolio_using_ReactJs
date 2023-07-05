import React from 'react'
import './certifications.css'
import CER1 from '../../assets/certi1.png'
import CER2 from '../../assets/certi2.png'
import CER3 from '../../assets/certi3.png'
import CER4 from '../../assets/certi4.png'
import CER5 from '../../assets/certi5.png'

const certifications = () => {
  return (
    <section id='certifications'>
      <h2>My Certifications</h2>

      <div className='container certification__container'>
        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER1} alt=''/>
          <h3>Full Stack MERN Bootcamp</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1mGyxEvhu4ynwo8NkmziKgUPMjkNbApZI/view?usp=sharing' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER2} alt=''/>
          <h3>Programming for everybody-python</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1lAvdnvkYSlzVepo8ZuT08Ur3PSPa5lqK/view' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER3} alt=''/>
          <h3>  Programming Fundamentals</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1lAvdnvkYSlzVepo8ZuT08Ur3PSPa5lqK/view' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER4} alt=''/>
          <h3>Red Hat certification</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1wwaFfj-SzyS7kxeIRBNqWo3hp21szeSn/view?usp=sharing' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER5} alt=''/>
          <h3>Neural Networks and Deep Learning</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1LESI5gqoVMckCTorgLTuhiBPY_tJoONq/view' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>
        
       
        
      </div>
    </section>
  )
}

export default certifications