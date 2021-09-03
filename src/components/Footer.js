import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from 'react-social-icons';

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 bg-dark text-light">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">Project PSA English 10</h5>
            <p>
             Developed by Dayan Ibrar with React JS
            </p>
            <SocialIcon className="socialbutton" url="https://www.linkedin.com/in/dayan-ibrar-80a2a81bb" />
            <SocialIcon className="socialbutton" url="https://www.instagram.com/dayanibrar/" />
            <SocialIcon className="socialbutton" url="https://www.facebook.com/dayan.ibrar.9" />
            <SocialIcon className="socialbutton" url="https://www.behance.net/dayanibrar/projects" />
            <SocialIcon className="socialbutton" url="https://www.dayanibrar.com" />
            <SocialIcon className="socialbutton" url="https://www.youtube.com/channel/UCo1vgq6MG6rpuntNOleg-Gg/about" />
            <SocialIcon className="socialbutton" url="https://www.influencive.com/dayan-ibrar-a-self-taught-developer-who-created-multiple-companies-at-the-age-of-15/" />
            <SocialIcon className="socialbutton" url="https://www.xidasacademy.com" />
            <SocialIcon className="socialbutton" url="https://www.quadgrafix.com" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.dayanibrar.com" className="footerlink text-light">Dayan Ibrar</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;