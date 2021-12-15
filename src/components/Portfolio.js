import React from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            options: {
                loop: true,
                margin: 0,
                nav: true,
                navText: ['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 4,
                    },
                },
            },
        };
	}

    render() {
        return(
            <div id='Portfolio'>
                <div className='container'>
                    <div className='sectionTitle'>
                        <h1><span></span>What we do</h1>
                        <h2>Helping you find the property of your dreams.</h2>
                    </div>
                </div>

                <OwlCarousel  
                    className="resSlider projectSlider owl-theme"  
                    {...this.state.options}>  
                    
                    <div className="item">
                        <div className="projectItem">
                            <div className="projectImg">
                                <img src={"/assets/images/portfolio/img1.png"} />
                            </div>
                            <div className="projectData">
                                <h1>EL-Seyuof Building</h1>
                                <a>View Project <i className='icon-arrow-down-right2'></i></a>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>

                <div className='viewAll'>
                    <div className='container'>
                        <a href='#'>Browse all our projects…</a>
                    </div>
                </div>
            </div>
        )
    }

}