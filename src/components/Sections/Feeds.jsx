import React from 'react';

import Setting from '../../assets/images/Search/settings.svg';
import Mushtariy from '../../assets/images/Search/social1.svg';
import Shuxratbek from '../../assets/images/Search/social2.svg';
import './feeds.scss';
const Feeds = () => {
    return (
        <div className='feeds container pt-2'>
            <input class="feeds__input form-control " placeholder="Search Twitter" />
            <ul className='feeds__list mt-3'>
                <li className='feeds__item'>
                    <div className='feeds__itemWrap'>
                        <h5 className='feeds__header'>Trends for you</h5>
                        <img className='feeds__iconImg' src={Setting} alt="Setting Icon" />
                    </div>
                    <div className='d-flex pt-2'>
                        <p className='feeds__text'>Trending in Germany</p>
                        <span className='item__dots'>...</span>
                    </div>
                    <h5 className='feeds__heading'>Revolution</h5>
                    <p className='feeds__text'>50.4K Tweets</p>
                </li>
                <li className='feeds__item'>
                    <div className='d-flex pt-2'>
                        <p className='feeds__text'>Trending in Germany</p>
                        <span className='item__dots'>...</span>
                    </div>
                    <h5 className='feeds__heading'>Revolution</h5>
                    <p className='feeds__text'>50.4K Tweets</p>
                </li>
                <li className='feeds__item'>
                    <div className='d-flex pt-2'>
                        <p className='feeds__text'>Trending in Germany</p>
                        <span className='item__dots'>...</span>
                    </div>
                    <h5 className='feeds__heading'>Revolution</h5>
                    <p className='feeds__text'>50.4K Tweets</p>
                    <a className='feeds__link' href="#">Show more</a>
                </li>
            </ul>
            <div className='feeds__socialWrap'>
                <h5>You might like</h5>
                <ul className='feeds__socialList mt-3'>
                    <li className='feeds__socialItem'>
                        <div className='feeds__socialItemWrap'>
                            <img className='feeds__socialImg' src={Mushtariy} alt="" />
                            <div className='mx-2'>
                                <h6 className='feeds__socialHeading'>Mushtariy</h6>
                                <span className='feeds__socialMinSpan'>@Mushtar565266</span>
                            </div>
                        </div>
                        <a className='feeds__socialLink' href="#">Follow</a>
                    </li>
                    <li className='feeds__socialItem mt-3'>
                        <div className='feeds__socialItemWrap'>
                            <img className='feeds__socialImg' src={Shuxratbek} alt="" />
                            <div className='mx-2'>
                                <h6 className='feeds__socialHeading'>Shuxratbek</h6>
                                <span className='feeds__socialMinSpan'>@mrShuxratbek</span>
                            </div>
                        </div>
                        <a className='feeds__socialLink' href="#">Follow</a>
                    </li>
                </ul>
                <a className='feeds__link' href="#">Show more</a>
            </div>
        </div>
    );
};


export default Feeds;