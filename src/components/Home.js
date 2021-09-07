import React from "react";
import landingbg from "../images/99Z_jan15.jpg";
import homebg from "../images/landing.jpg";
import image1 from "../images/vecteezy_smart-city-illustration-1_dy0321.jpg";
import image2 from "../images/141_amFuLTE0.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import pdfbook from '../assets/files/PWSbook.pdf';
export default function Home() {
    return (
        <section>

       
        <mid>
            <header>
            <mid>
            <img src={landingbg} alt="The world largest network" className="absolute object-cover w-full h-75" fluid/>
            </mid>
            {/* <hero className="text-center relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8"> */}
            <hero className="text-center relative flex justify-center heading pt-5">
            <h1 className="mainheading mx-auto text-6xl font-bold leading-none lg:leading-snug  text-light">Entrepreneurship by Dayan Ibrar</h1>
            </hero>
            </header>
           
        </mid>

        <section className="homelandingarea bg-dark text-light">

        <section className="mt-5">
            <header className="welcomesection">
                <h1 className="gradientheading text-center mt-5 mb-2">PSA Project</h1>
                <p className="paratext mt-3 mb-3 text-center">
                "Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself."</p>
            </header>
        </section>

        <section className="about mt-5" id="about2">
        <div className="container">
        <div className="row  mx-auto">
        <div className="col-lg-6">
            <img classNames="imageone fluid"src={image2} alt={"Entrepreneurship"}/>
          </div>
          <div className="text col-lg-6">
            <h2 className="mt-3 mb-0">Why Entrepreneurship ?</h2>
            <p>First of all, we spend more than 20 years of our life studying, working hard for a piece of
                paper that decides how intelligent we are right, but after going through all this we work 9-5 for the
                for someone else, for someone else's business, to make his wealth, why ? we all are humans, and after the
                hardwork we go through we dont deserve a 9-5 job, but a wealthy, financially free life and that can be only achieved by
                Entrepreneurship because when you are an entrepreneur you decide what you need, what you want to do, where you want to go,
                when you need to take a day, week or month off and spend time with your loved ones.
                <br />
                Working hard and smart, making sacrifices, taking risks and staying out of bad company for few years will get you ready and make
                you successful because if hardwork makes you a millionaire then all 9-5 people would be rich.
                <br />
                Now 9-5 is not a bad thing to do, but they odds we go through in our life and then working for someone your whole life is not
                worth it, but you do what makes  you happy as i am a young entrepreneur but i also wants to work within the 
             
            </p>
          </div>

          <div className="text col-lg-12 mt-0">
            <p>
                US pentagon/government in
                cybersecurity or cybercrime department because that makes me happy.
                You can go to college and run multiple business, you can work 9-5 and then work for couple more hours on a side hustle right it is possible,
                all you need is motivation, willing to work your butt off for years without quitting.
                <br />
                So even if you are in college, high school or working 9-5, Entrepreneurship will give you a passive income which will let you live your dream life and do
                what you like to do.
                <br />
                <br />
                <br />
                <strong className="gradientheading2">
                    This is possible, becoming a millionaire, billionaire is not impossible it just requires
                    a price which is years of hardwork, sacrifice, risks and you being motivated because we live in 
                    a digital world, you can run e-commerce business from your phone or laptop, trade stocks and crypto,
                    if you have an innovative idea you can bring it to life and contribute and bring a change to this world and not only that there
                    are oppertunities right infront of you all the time all you need to do is brainstrom it, think about it and work on it and figure out how
                    you can use an oppertunity to your advantage that would be worth it.</strong>
              <br />
            </p>
          </div>
          {/* <div className="col-lg-6">
            <img classNames="imageone fluid"src={image2} alt={"Entrepreneurship"}/>
          </div> */}
          <div className="text col-lg-12">
            <h2 className="mt-5">4 Facts about Entrepreneurship</h2>
            <p>Entrepreneurship is important for a number of reasons, from promoting social change 
                to driving innovation. Entrepreneurs are frequently thought of as national assets to 
                be cultivated, motivated, and remunerated to the greatest possible extent. In fact, 
                some of the most developed nations such as the United States are world leaders due to 
                their forward-thinking innovation, research, and entrepreneurial individuals.
              <br />
            </p>
            <p>
                <strong>Be your own Boss:</strong> Work at anytime you want, as you want, without taking orders from someone, go on vacations, take control of your life and do whenever you want.
                <br />
                <br />
                <strong>Financial Freedom:</strong> You won’t have to worry about expenses, luxury penthouses, mansions, cars and stuff, you can work from anywhere in the world while spending time with your family.
                <br />
                <br />
                <strong>Take it as far as you want:</strong> You have the power and the freedom to run your business as effectively as you want, The only limitations you have are the ones you set for yourself. You set the tone, you establish the parameters, and you stop exactly where you decide you want to stop
                <br />
                <br />
                <strong>Control over your own fate:</strong> Your fate as a business owner is in your own hands. In other words, nobody is going to fire you. You’re going to have a job, and you’re going to be in business as long as you can keep the business alive. You never have to worry about someone else in authority pivoting in the wrong direction and deciding your fate for you.
                
            </p>
            <a href={pdfbook} download="PWSbook" className="btn text-light btn-hover color-1 w-75 mt-2 mx-auto">Download PDF for this</a>
          </div>
          
        </div>
        </div>
      </section>

        </section>

     
   
      </section>

    )
}
