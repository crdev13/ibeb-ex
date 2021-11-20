import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';
import MainContent from './MainContent';

const HomePage = () => (
    <>
        {/* <div className="hero">
            <div className="slides">
                <li data-bg-image="/images/slide-1.jpg">
                    <div className="container">
                        <div className="slide-content">
                            <small className="slide-subtitle">Iglesia Estrella de Belen</small>
                            <h2 className="slide-title">Place with a real love</h2>

                            <a href="#" className="button">Nuestras familias</a>
                        </div>
                    </div>
                </li>

                <li data-bg-image="/images/slide-1.jpg">
                    <div className="container">
                        <div className="slide-content">
                            <small className="slide-subtitle">True Church</small>
                            <h2 className="slide-title">Place with a real love</h2>

                            <a href="#" className="button">Nuestras familias</a>
                        </div>
                    </div>
                </li>
            </div>
        </div> */}
        <div className="homepage-slide">
                <Image
                    priority
                    src="/images/slide-1.jpg"
                    className="logo"
                    layout="fill"
                />
        </div>
        <Container>
            <MainContent />
            <div className="fullwidth-block">
                <div className="container">
                    <h2 className="section-title">Noticias</h2>

                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="news">
                                <Image
                                    src="/images/news-thumb-1.jpg"
                                    className="news-image"
                                    height={200}
                                    width={300}
                                />
                                <h3 className="news-title"><a href="#">Conferencia de Señoritas</a></h3>
                                <small className="date"><i className="fa fa-calendar"></i>24 ago 2014</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="news">
                                <Image
                                    src="/images/news-thumb-2.jpg"
                                    className="news-image"
                                    height={200}
                                    width={300}
                                />
                                <h3 className="news-title"><a href="#">Campaña Misionera</a></h3>
                                <small className="date"><i className="fa fa-calendar"></i>12 ago 2021</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="news">
                                <Image
                                    src="/images/news-thumb-3.jpg"
                                    className="news-image"
                                    height={200}
                                    width={300}
                                />
                                <h3 className="news-title"><a href="#">Conferencia de Varones</a></h3>
                                <small className="date"><i className="fa fa-calendar"></i>30 jul 2021</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="news">
                                <Image
                                    src="/images/news-thumb-4.jpg"
                                    className="news-image"
                                    height={200}
                                    width={300}
                                />
                                <h3 className="news-title"><a href="#">Conferencia de Mujeres</a></h3>
                                <small className="date"><i className="fa fa-calendar"></i>24 Jul 2021</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="section-title">Upcoming events</h2>
                            <ul className="event-list">
                                <li>
                                    <a href="#">
                                        <h3 className="event-title">africa mission trip</h3>
                                        <span className="event-meta">
                                            <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                            <span><i className="fa fa-map-marker"></i> Africa</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 className="event-title">Bible school</h3>
                                        <span className="event-meta">
                                            <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                            <span><i className="fa fa-map-marker"></i> Saint paul church</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 className="event-title">praying for kids</h3>
                                        <span className="event-meta">
                                            <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                            <span><i className="fa fa-map-marker"></i> true church</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 className="event-title">love giving</h3>
                                        <span className="event-meta">
                                            <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                            <span><i className="fa fa-map-marker"></i> St cathedral</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 className="event-title">god ont the vacation</h3>
                                        <span className="event-meta">
                                            <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                            <span><i className="fa fa-map-marker"></i> greenie lake</span>

                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3 className="event-title">homeless helping</h3>
                                        <span className="event-meta">
                                            <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                            <span><i className="fa fa-map-marker"></i> Detroit city</span>

                                        </span>
                                    </a>
                                </li>
                            </ul>

                            <div className="text-center">
                                <a href="#" className="button">See all events</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="section-title">Latest seremons</h2>
                            <ul className="seremon-list">
                                <li>
                                    <img src="images/small-thumb-1.jpg" alt=""/>
                                    <div className="seremon-detail">
                                        <h3 className="seremon-title"><a href="#">I believe in god with all my heart</a></h3>
                                        <div className="seremon-meta">
                                            <div className="pastor"><i className="fa fa-user"></i> Alan Ray</div>
                                            <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/small-thumb-2.jpg" alt=""/>
                                    <div className="seremon-detail">
                                        <h3 className="seremon-title"><a href="#">Trusting in jesus and god</a></h3>
                                        <div className="seremon-meta">
                                            <div className="pastor"><i className="fa fa-user"></i> David Clark</div>
                                            <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/small-thumb-3.jpg" alt=""/>
                                    <div className="seremon-detail">
                                        <h3 className="seremon-title"><a href="#">Love your kids</a></h3>
                                        <div className="seremon-meta">
                                            <div className="pastor"><i className="fa fa-user"></i> anthony roberts</div>
                                            <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="text-center">
                                <a href="#" className="button">See all seremons</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
);
export default HomePage