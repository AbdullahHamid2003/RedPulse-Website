import { useState } from "react";
import NavbarOne from "../Components/NavbarOne/BANavbar-One";
import NavbarTwo from "../Components/NavbarTwo/BANavbar-Two";
import bgImg from '../Images/Donate-Blood-bg.jpg'
import InputComponent from "../Components/Input/BAInput";
import FooterComponent from "../Components/Footer/footer";
import ButtonComponent from "../Components/Button/BAButton";
import BloodDonation_1 from "../Images/Carousel-Img-1.jpg"
import SidebySideComponent from "../Components/Side-by-Side/side-by-side-component";

export default function DonateBlood() {

    const [model, setModel] = useState({})
    const [showForm, setShowForm] = useState(true);

    let fillModel = (key, value) => {
        model[key] = value
        setModel({ ...model })
    }

    const containerStyle = {
        // position: 'fixed',
        // top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '-1',
        display: 'flex', // Apply flex container
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        padding: "150px"
    };


    const formContainerStyle = {
        // marginTop: '300px',
        // marginBottom: '100px',
        width: '90%', // Adjust the width as needed
        maxWidth: '900px', // Set a maximum width for larger screens
        margin: 'auto', // Center the form on the screen
        backgroundColor: 'rgba(0,0,0,.4)',
        padding: '40px',
        borderRadius: '20px',
    };

    const thankYouStyle = {
        textAlign: 'center',
        color: 'white',
        fontSize: '1.5rem',
    };


    return (
        <>
            <section>
                <NavbarOne />
                <NavbarTwo />
            </section>

            <section style={containerStyle} className="h-screen flex justify-center items-center">
                <div style={formContainerStyle}>
                    <div className="py-3">
                        <p className="text-center text-white fst-italic fs-2 fw-bolder">SCHEDULE AN APPOINTMENT</p>
                    </div>
                    {showForm ? (
                        <>
                            <div className="row p-4">
                                <div className="col-md-6 py-2">
                                    <InputComponent
                                        value={model.userName}
                                        onchange={(e) => (
                                            fillModel("FirstName", e.target.value)
                                        )
                                        }
                                        label="First Name"
                                    />
                                </div>
                                <div className="col-md-6 py-2">
                                    <InputComponent
                                        value={model.userName}
                                        onchange={(e) => (
                                            fillModel("LastName", e.target.value)
                                        )
                                        }
                                        label="Last Name"
                                    />
                                </div>
                                <div className="col-md-6 py-2">
                                    <InputComponent
                                        value={model.userName}
                                        onchange={(e) => (
                                            fillModel("Email", e.target.value)
                                        )
                                        }
                                        label="Email"
                                    />
                                </div>
                                <div className="col-md-6 py-2">
                                    <InputComponent
                                        value={model.userName}
                                        onchange={(e) => (
                                            fillModel("MobileNumber", e.target.value)
                                        )
                                        }
                                        label="Mobile Number"
                                    />
                                </div>
                                <div className="col-md-6 py-2">
                                    <InputComponent
                                        value={model.userName}
                                        onchange={(e) => (
                                            fillModel("BloodType", e.target.value)
                                        )
                                        }
                                        label="Blood Type"
                                    />
                                </div>
                                <div className="col-md-6 py-2">
                                    <InputComponent
                                        value={model.userName}
                                        onchange={(e) => (
                                            fillModel("OtherInfo", e.target.value)
                                        )
                                        }
                                        label="Any Other Information"
                                    />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center py-2">
                                    <ButtonComponent
                                        buttonText="Schedule an Appointment"
                                        buttonType="contained"
                                        onclick={() => { setShowForm(false) }}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div style={thankYouStyle}>
                            Thank you for contacting RedPulse. We will get back to you as soon as possible.
                        </div>
                    )
                    }


                </div>
            </section>

            <section className='m-4'>
                <div className="container">
                    <SidebySideComponent
                        imageURL={BloodDonation_1}
                        heading="Donate Blood to Save Lives"
                        para="Our mission is to create a community of donors who make a difference in the lives of others. We prioritize the safety and comfort of our donors and patients, and provide the highest quality of care to ensure an easy and convenient donation process. Join us in our life-saving mission. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nostrum dolor explicabo molestiae soluta, commodi a sunt asperiores. Aliquam ipsam neque sunt deserunt unde ex enim, error laboriosam natus soluta. sit amet consectetur adipisicing elit. Deleniti nostrum dolor explicabo molestiae."
                    />
                </div>
            </section>

            <section>
                <FooterComponent />
            </section>

        </>
    )
}