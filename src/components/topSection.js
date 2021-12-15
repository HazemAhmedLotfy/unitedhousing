import React from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class TopSection extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            options: {
                loop: true,
                margin: 0,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 1,
                    },
                },
            },
        };
	}

    render() {
        return(
            <div id='bannerSection'>
                <OwlCarousel  
                    className="resSlider projectSlider owl-theme"  
                    {...this.state.options}>  
                    
                    
                    <div className='bannerItem'>
                        <div className='bannerImage'>
                            <img src='/assets/images/topSection/مدينة-الاسكندرية-Alexandria-city.png' />
                        </div>

                        <div className='bannerInfoCont '>
                            <div className='container'>
                                <div className='bannerInfo'>
                                    <h1>Luxury</h1>
                                    <h2>SUMMER YOUR WAY & ENJOY.</h2>
                                    <a>View Project <i className='icon-arrow-down-right2'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bannerItem'>
                        <div className='bannerImage'>
                            <img src='/assets/images/topSection/مدينة-الاسكندرية-Alexandria-city.png' />
                        </div>

                        <div className='bannerInfoCont '>
                            <div className='container'>
                                <div className='bannerInfo'>
                                    <h1>Luxury</h1>
                                    <h2>SUMMER YOUR WAY & ENJOY.</h2>
                                    <a>View Project <i className='icon-arrow-down-right2'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        )
    }

}