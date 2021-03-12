import React from 'react'
import Fade from 'react-reveal/Fade'
import Section from 'elements/Section'
import Header from 'parts/Header'
import Clients from 'parts/Clients'
import Card from 'elements/Card'
import Lists from 'elements/Lists'
import Feature from 'parts/Feature'
import Button from 'elements/Button'
import HeroImage from 'assets/images/hero-image.png'
import FeatureTile01 from 'assets/images/feature-tile-icon-01.svg'
import FeatureTile02 from 'assets/images/feature-tile-icon-02.svg'
import FeatureTile03 from 'assets/images/feature-tile-icon-03.svg'
export default function Homepage() {
    const features = [
        {
            imgSrc: FeatureTile01,
            imgAlt: "Feature title icon 01",
            title: "Join BWA",
            description: " A pseudo-Latin text used web desaign,layout, and printing in place of things to emphasise desaign. "         
        },

        {
            imgSrc: FeatureTile02,
            imgAlt: "Feature title icon 02",
            title: "Join System",
            description: " A pseudo-Latin text used web desaign,layout, and printing in place of things to emphasise desaign. "         
        },

        {
            imgSrc: FeatureTile03,
            imgAlt: "Feature title icon 03",
            title: "Join Mobile dev",
            description: " A pseudo-Latin text used web desaign,layout, and printing in place of things to emphasise desaign. "         
        },
        
    ]


    const listPricing = [
        {
            price: 27,
            currencySymbol: "$",
            description: "lorem isum is conson text",
            features: [
                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },
                {
                    isChecked: false,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: false,
                    content: "Exception sint concat velit"
                }


            ]
        },

        {
            price: 47,
            currencySymbol: "$",
            description: "lorem isum is conson text",
            features: [
                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },
                {
                    isChecked: false,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: false,
                    content: "Exception sint concat velit"
                }


            ]
        },

        {
            price: 77,
            currencySymbol: "$",
            description: "lorem isum is conson text",
            features: [
                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: true,
                    content: "Exception sint concat velit"
                },
                {
                    isChecked: false,
                    content: "Exception sint concat velit"
                },

                {
                    isChecked: false,
                    content: "Exception sint concat velit"
                }


            ]
        }
    ]


    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Section className="hero illustration-section-01" iseCenterContent>
                <div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
                                <Fade button delay={500}>
								<h1
									className="mt-0 mb-16"
								>
									Landing template for startups
								</h1>
                                </Fade>
								<div className="container-xs">
                                    <Fade button delay={1000}>    
                                        <p
                                            className="mt-0 mb-32"
                                        >
                                            Our landing page template works on all
                                            devices, so you only have to set it up
                                            once, and get beautiful results forever.
                                        </p>
                                    </Fade>  
								</div>
							</div>
							<div
								className="hero-figure illustration-element-01"
							
							>
                                <Fade button delay={1500}>
								<img
									className="has-shadow"
									src={HeroImage}
									alt="Hero image"
									width="896"
									height="504"
								/>
                                </Fade>
							</div>
						</div>
					</div>
                </Section>
                <Clients></Clients> 
                <Section className="feature-tiles">
                    <div className="container">
                        <div className="features-tiles-inner section-inner">
                            <div className="tiles-wrap">
                                {features.map((feature, index ) => (
                                    <Feature
                                        key={index}
                                        delayInMS={index * 500 }
                                        data={feature}
                                    >

                                    </Feature>

                                ))}
                              
                            </div>
                        </div>
                    </div>
                </Section>  

                <Section className="pricing">
                    <div className="container">
                        <div className="pricing-inner section-inner has-top-divider">
                            <div className="section-header center-content">
                                    <div className="container-xs">
                                        <h2 className="mt-0 mb-16">
                                            Simple, transarent pricing
                                        </h2>
                                        <p className="m-0">
                                            Lorem ipsum is common placeholder text
                                            used to demonstrate the graphic elements
                                            of a document or visual presentation.
                                        </p>
                                    </div>
                                </div>

                                <div className="tiles-wrap">
                                    {
                                        listPricing.map((list, index) => 
                                            <Card hasShadow>
                                                <div class="pricing-item-content">
											<div
												className="pricing-item-header pb-24 mb-24"
											>
												<div
													className="pricing-item-price mb-4"
												>
													<span
														className="pricing-item-price-currency h2"
                                    >{list.currencySymbol}</span
													><span
														className="pricing-item-price-amount h1 pricing-switchable"
														data-pricing-monthly="34"
														data-pricing-yearly="27"
                                    >{list.price}</span
													>
												</div>
												<div
													className="text-xs text-color-low"
												>
													{list.description}
												</div>
											</div>
											<div
												className="pricing-item-features mb-40"
											>
												<div
													className="pricing-item-features-title h6 text-xs text-color-high mb-24"
												>
													What’s included
                                                    <Lists data={list.features} isSmall className="pricing-item-features-list mb-32">

                                                    </Lists>
												</div>
												
											</div>
                                            <div className="pricing-item-cta mb-8">
                                                <Button isPrimary isBlock>Start free trial</Button>
                                            </div>
										</div>
                                            </Card>
                                        )
                                    }
                                </div>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    )
}