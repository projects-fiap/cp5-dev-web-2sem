import frente1 from '../assets/frente1.png'
import frente2 from '../assets/frente2.png'
import atras1 from '../assets/atras1.png'
import atras2 from '../assets/atras2.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import slide1 from '../assets/slide-1.jpg'
import slide2 from '../assets/slide-2.jpg'
import slide3 from '../assets/slide-3.jpg'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
    { id: 1, path: slide1 },
    { id: 2, path: slide2 },
    { id: 3, path: slide3 },
]

export default function Home() {
    return (
        <main className="container-fluid bg-black">
            <section>
                <Swiper
                    pagination={{ clickable: true }}
                    navigation
                >
                    {images.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.path} alt="slide" className='slide-item' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="catalog">
                <h2 className="text-white text-center fs-2 mt-5">CATÁLOGO</h2>
                <div className="d-flex justify-content-center img-fluid">
                    <div className="d-flex justify-content-center gap-5 mx-auto position-relative">
                        <div className="col-lg-7">
                            <img src={frente1} alt="frente1" className="z-3 position-absolute top-50 start-0 img-fluid front-img" />
                            <img src={atras1} alt="atras1" className="z-2 position-relative top-0 start-0 img-fluid back-img" />
                        </div>
                        <div className="col-lg-12">
                            <img src={frente2} alt="frente1" className="z-3 position-absolute top-50 start-50 img-fluid front-img" />
                            <img src={atras2} alt="atras1" className="z-2 position-relative top-0 start-50 img-fluid back-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu d-flex justify-content-center row gap-5">
                <div className="card bg-black border border-primary p-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="card-body row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <h5 className="card-title text-white fs-3">SUSHI</h5>
                            <p className="card-text text-white fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, praesentium. Asperiores placeat accusamus quidem nam ut enim.</p>
                        </div>

                        <div className="col-lg-7 col-md-6 col-sm-12 text-center">
                            <img src={card1} alt="card1Menu" className="rounded mb-3" />
                            <h3 className="text-white">R$ 56,90 16un</h3>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>

                <div className="card bg-black border border-primary p-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="card-body row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <h5 className="card-title text-white fs-3">GUIOZA</h5>
                            <p className="card-text text-white fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, praesentium. Asperiores placeat accusamus quidem nam ut enim.</p>
                        </div>

                        <div className="col-lg-7 col-md-6 col-sm-12 text-center">
                            <img src={card2} alt="card2Menu" className="rounded mb-3" />
                            <h3 className="text-white">R$ 59,90 8un</h3>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>

                <div className="card bg-black border border-primary p-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="card-body row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <h5 className="card-title text-white fs-3">TEMAKI</h5>
                            <p className="card-text text-white fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, praesentium. Asperiores placeat accusamus quidem nam ut enim.</p>
                        </div>

                        <div className="col-lg-7 col-md-6 col-sm-12 text-center">
                            <img src={card3} alt="card3Menu" className="rounded mb-3" />
                            <h3 className="text-white">R$ 25,00 1un</h3>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>

                <div className="card bg-black border border-primary p-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="card-body row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <h5 className="card-title text-white fs-3">HARUMAKI</h5>
                            <p className="card-text text-white fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, praesentium. Asperiores placeat accusamus quidem nam ut enim.</p>
                        </div>

                        <div className="col-lg-7 col-md-6 col-sm-12 text-center">
                            <img src={card4} alt="card4Menu" className="rounded mb-3" />
                            <h3 className="text-white">R$ 29,90 6un</h3>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-center mb-5">
                    <a href="#" className="btn btn-primary">Carregar mais</a>
                </div>
            </section>

        </main>
    )
}