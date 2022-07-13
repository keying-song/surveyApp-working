import './mainPage.css';
import bgImg from './bgImg.png';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Mainpage() {
   const history = useHistory();
   const handleClickStart = () => {
      // go to SurveyPage
      history.push('/');
   };
   const handleClickRegister = () => {
      // go to SurveyPage
      history.push('/register');
   };

   return (
      <div className="mainContainer">
         <div className="top">
            <h1>
               <strong>The best Survey site</strong>
            </h1>
            <h3>Create & Collect</h3>

            <div>This is explanation section</div>
            <img src={bgImg} alt="" className="bgimg" />
         </div>
         <div className="buttons">
            <Button variant="warning" size="lg" onClick={handleClickStart}>
               Get Started!
            </Button>
            <Button variant="success" size="lg" onClick={handleClickRegister}>
               Sigh in
            </Button>
         </div>
         <div className="cardConainer">
            <Card style={{ width: '30rem' }}>
               <Card.Body>
                  <Card.Title>Free</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Button</Button>
               </Card.Body>
            </Card>
            <Card style={{ width: '30rem' }}>
               <Card.Body>
                  <Card.Title>Nomal</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Button</Button>
               </Card.Body>
            </Card>
            <Card style={{ width: '30rem' }}>
               <Card.Body>
                  <Card.Title>Premium</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Button</Button>
               </Card.Body>
            </Card>
         </div>
      </div>
   );
}
export default Mainpage;
  