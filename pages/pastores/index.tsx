import Container from '../../components/layout/Container';
import Image from 'next/image';

const Pastors = () => (
  <Container>
    <div className="fullwidth-block">
      <div className="container marginAuto">
        <div className="centered-content">
          <h2 className="section-title">Nuestros Pastores</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="news">
                <Image
                    src="/images/news-thumb-1.jpg"
                    className="news-image"
                    height={700}
                    width={800}
                />
                <h3 className="news-title"><a href="#">Pastor Alfredo Bernal</a></h3>
                <small className="date"><i className="fa fa-calendar"></i>24 ago 2014</small>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="news">
                <Image
                    src="/images/news-thumb-2.jpg"
                    className="news-image"
                    height={700}
                    width={800}
                />
                <h3 className="news-title"><a href="#">Pastor Miguel Arredondo</a></h3>
                <small className="date"><i className="fa fa-calendar"></i>12 ago 2021</small>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="news">
                <Image
                    src="/images/news-thumb-3.jpg"
                    className="news-image"
                    height={700}
                    width={800}
                />
                <h3 className="news-title"><a href="#">Pastor Eliceo Saavedra</a></h3>
                <small className="date"><i className="fa fa-calendar"></i>30 jul 2021</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Pastors;
