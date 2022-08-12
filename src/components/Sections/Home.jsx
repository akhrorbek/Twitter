import React from 'react';
import Homelogo from '../../assets/images/Home/homelogo.svg';
import Heroimg from '../../assets/images/Home/hero-photo.svg';
import Icons from '../../assets/images/Home/homeheroicons.svg';
///////////////////////
import Carlo from '../../assets/images/Home/listimg1.svg';
import Comment from '../../assets/images/Home/Frame1.svg';
import Meal from '../../assets/images/Home/meal.png';

import Exibitor from '../../assets/images/Home/listimg2.svg'
import Creator from '../../assets/images/Home/listimg3.svg';
import './home.scss';
const Home = () => {
    return (
        <div className='home'>
            <div className='home__header  p-3'>
                <h5 className='home__heading'>Home</h5>
                <img className='home__logo' src={Homelogo} alt="" />
            </div>
            <div className='home__hero'>
                <div className='hero__top'>
                    <img className='hero__img' src={Heroimg} alt="Hero photo" width='60' height='60' />
                    <input className='hero__input mx-3' type="text" placeholder="What's happining..." />
                </div>
                <div className='hero__bottom'>
                    <img className='hero__iconiks' src={Icons} alt="Comment Icons" width='128' height='15' />
                    <button className='hero__button btn btn-info'>Tweet</button>
                </div>
                <ul className='hero__list'>
                    <li className='hero__item'>
                        <img className='item__img' src={Carlo} alt="Carlo pics" width='60' height='60' />
                        <div className='item__wrapper'>
                            <h6 className='item__heading'>Disgnsta <span className='item__minspan'>@inner - 25m</span></h6>
                            <p className='item__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, amet.</p>
                            <img className='item__icon' src={Comment} alt="Comment" width='360' />
                        </div>
                        <span className='item__dots'>...</span>
                    </li>
                    <li className='hero__item'>
                    <img className='item__img' src={Exibitor} alt="Carlo pics" width='60' height='60' />
                        <div className='item__wrapper'>
                            <h6 className='item__heading'>Bobur <span className='item__minspan'>@bobur_mavlonov · Apr 1</span></h6>
                            <p className='item__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, amet.</p>
                            <img className='item__icon' src={Comment} alt="Comment" width='360' />
                        </div>
                        <span className='item__dots'>...</span>
                    </li>
                    <li className='hero__item'>
                    <img className='item__img' src={Creator} alt="Carlo pics" width='60' height='60' />
                        <div className='item__wrapper'>
                            <h6 className='item__heading'>CreativePhoto <span className='item__minspan'>@cloutexhibition - 1h</span></h6>
                            <p className='item__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, amet.</p>
                            <img className='item__meal mt-3' src={Meal} alt="Meal" width='500' height='300' />
                            <img className='item__icon' src={Comment} alt="Comment" width='360' />
                        </div>
                        <span className='item__dots'>...</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default Home;