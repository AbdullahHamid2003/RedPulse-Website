import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../Components/Card/BACard"
import Carousel_Img_1 from "../Images/blood-donation(1).jpg"
import Carousel_Img_2 from "../Images/Carousel-Img-2.jpg"
import Carousel_Img_3 from "../Images/Carousel-Img-3.jpg"
import Section_2_bgIMG from "../Images/Section-2-bg.jpg"
import CardImg1 from "../Images/Card-Img-1.jpg"
import CardImg2 from "../Images/Card-Img-2.webp"
import CardImg3 from "../Images/Card-Img-3.webp"
import BloodDonation_1 from "../Images/Carousel-Img-1.jpg"
import BloodDonation_2 from "../Images/blood-donation(2).jpg"
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import { faInstitution } from '@fortawesome/free-solid-svg-icons';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import SidebySideComponent from "../Components/Side-by-Side/side-by-side-component"
import NavbarTwo from '../Components/NavbarTwo/BANavbar-Two';
import NavbarOne from '../Components/NavbarOne/BANavbar-One';
import Footer from '../Components/Footer/footer';


export default function Home() {

    return (
        <>
            {/* navbars begins */}
            <section>
                <NavbarOne />
                <NavbarTwo />
            </section>

            {/* Hero Section Begins */}
            <section className="HeroSection">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={Carousel_Img_1} className="d-block w-100 h-75" alt="Carousel Image 1" />
                            <div class="carousel-caption d-none d-md-block d-sm-block">
                                <p className="text-center text-white fst-italic fs-2 fw-bolder">Give a gift of Life with <span className="text-[red]">Red</span>Pulse</p>
                                <p className="text-center text-white fst-italic fs-5 fw-bold">Your Blood Can Make A Difference</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={Carousel_Img_2} className="d-block w-100" alt="Carousel Image 2" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Abdullah Blood Bank</h1>
                                <h5>Donate Blood Safely</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Carousel_Img_3} className="d-block w-100" alt="Carousel Image 3" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Abdullah Blood Bank</h1>
                                <h5>Donate Blood Safely</h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            {/* Division Section Begins */}
            <section>
                <div className="container text-center mt-3">
                    <div>
                        <h1 className="pt-3 pb-2 fst-italic fw-bolder">Our Divisions</h1>
                    </div>
                    <div>
                        <p className="fs-5 pb-3">
                            Started in 1979, Husaini was formed with the aim to provide safe blood to our communities. The vision of Husaini has since grown to become a holistic healthcare services organization. In line with this vision, the service offerings have expanded into multiple distinct divisions. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus totam doloribus nostrum tempore quos ipsa cupiditate accusamus eum atque exercitationem. Consectetur cupiditate ipsa aliquam. Delectus quisquam soluta cum illo tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem optio, amet quaerat aperiam nesciunt ad illum velit molestias, exercitationem odit nulla eligendi iure, architecto dolorem inventore cum sapiente excepturi suscipit!
                        </p>
                    </div>
                </div>
            </section>

            {/* Cards Section Begins */}
            <section>
                <div className="container pb-4 pt-4 text-center">
                    <div className="row">
                        <div className="col-md-3 mb-2">
                            <div className="division-card">
                                <Card
                                    icon={faDroplet}
                                    title="Blood Bank"
                                />
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="division-card">
                                <Card
                                    icon={faFlaskVial}
                                    title="Laboratory"
                                />
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="division-card">
                                <Card
                                    icon={faInstitution}
                                    title="Institute"
                                />
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="division-card">
                                <Card
                                    icon={faClinicMedical}
                                    title="Clinic Medical"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Side By Side Component */}
            <section>
                <div className="container">
                    <SidebySideComponent
                        imageURL={BloodDonation_2}
                        heading="Why Should You Donate Blood?"
                        para="Donating blood is a selfless act that has the power to save lives. Here are a few reasons why you should consider donating blood: ― You could help save up to three lives with just one donation. ― Blood is always needed in emergency situations, such as natural disasters and accidents. ― Blood is needed for patients undergoing surgeries, cancer treatment, and other medical procedures. ― Blood cannot be manufactured, which means that the only source of blood is through donations from volunteers. ― Donating blood can also have health benefits for the donor, such as reducing the risk of heart disease and cancer."
                    />
                </div>
            </section>

            {/* News/Updates Section Begins */}
            <section className='mb-3'>
                <div className="container text-center">
                    <div>
                        <h1 className="pt-4">News/Recent Updates</h1>
                    </div>
                    <div>
                        <p className="fs-5 pb-3">
                            Stay informed about our ongoing activities, future initiatives and other news.
                        </p>
                    </div>
                </div>

                <div className="container  text-center">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card
                                imageURL={CardImg1}
                                title="Check Your Eligibility"
                                description="Confirm you meet the eligibility requirements to donate blood, such as age, weight, and overall health."
                                showButton="true"
                            />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card
                                imageURL={CardImg2}
                                title="Check Your Eligibility"
                                description="Schedule an appointment at a blood bank or blood drive near you.Blood is a vital part of the human body and any deficiency in blood levels can cause serious complications in the health of a person."
                                showButton="true"
                            />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card
                                imageURL={CardImg3}
                                title="Donate Blood"
                                description="Arrive at the appointment, fill out a questionnaire, and donate blood. The process takes about 10-15 minutes."
                                showButton="true"
                            />
                        </div>

                    </div>
                </div>
            </section>
                
            {/* Side By Side Component */}
            <section className='mb-4'>
                <div className="container">
                    <SidebySideComponent
                        imageURL={BloodDonation_1}
                        heading="Donate Blood to Save Lives"
                        para="Our mission is to create a community of donors who make a difference in the lives of others. We prioritize the safety and comfort of our donors and patients, and provide the highest quality of care to ensure an easy and convenient donation process. Join us in our life-saving mission. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nostrum dolor explicabo molestiae soluta, commodi a sunt asperiores. Aliquam ipsam neque sunt deserunt unde ex enim, error laboriosam natus soluta. sit amet consectetur adipisicing elit. Deleniti nostrum dolor explicabo molestiae."
                    />
                </div>
            </section>


            {/* footer Section begins */}
            <section>
                <Footer />
            </section>

        </>
    )
}