import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import "./css/index.css";
import Header from './components/common/header';
import { Col, Container, Row,Modal,Button } from 'react-bootstrap';
import Sidebar from './components/common/sidebar';
import Home from './components/route/home';
import Workout from './components/route/workout';
import { useEffect, useState } from 'react';
import Login from './components/route/login';
import Join from "./components/route/join";
import { useCookies } from 'react-cookie';
import Routine from './components/route/routine';
import AddRoutine from './components/inputs/addRoutine';
import RoutineDetail from './components/detail/routineDetail';
import Search from './components/route/search';
import ShareRoutine from './components/route/shareRoutine';
import ShareRoutineDetail from './components/detail/shareRoutineDetail';
import AddWorkout from './components/inputs/addWorkout';
import WorkoutDetail from './components/detail/workoutDetail';
import Me from './components/route/me';
import JoinCheck from './components/route/joinCheck';
import NotFound from './components/notFound';
import GithubLoginCallback from './components/callback/githubLoginCallback';

function SwitchTemplate(){

  return(
    <>
    <Header/>
    <Container fluid="fluid" style={{marginTop:"00px"}}>
        <Row>
            <Sidebar/>
            <Col sm={9} md={10} className="custom_col mb-3">
                <Switch>
                  <Route exact path="/"><Home/></Route>

                  <Route exact path="/routine"><Routine/></Route> 
                  <Route exact path="/routine/:id"><RoutineDetail/></Route>   
                  <Route exact path="/add/routine"><AddRoutine/></Route>    
                   
                  <Route exact path="/workout"><Workout/></Route>  
                  <Route exact path="/add/workout"><AddWorkout/></Route> 
                  <Route exact path="/workout/:id"><WorkoutDetail/></Route>

                  <Route exact path="/share/routine"><ShareRoutine/></Route>
                  <Route exact path="/share/routine/:id"><ShareRoutineDetail/></Route>

                  <Route exact path="/search=:term"><Search/></Route> 
                  <Route exact path="/search="><Search/></Route>   

                  <Route exact path="/me"><Me/></Route>
                  <Route path="*"><NotFound/></Route>  
                </Switch>
            </Col>
        </Row>
    </Container> 
    
    </>
  )
}

function App() {

  const [isLogined , setIsLogined] = useState(false);
  const [on,setOn] = useState(true);

  useEffect(()=>{
    if(window.localStorage.getItem("SSID")){
      setIsLogined(true);
      setOn(false);
    }else{
      setIsLogined(false);
      setOn(false);
    }
  },[])
  return (
    <>
    {
    on ? <JoinCheck/> :
    isLogined ? 
      <SwitchTemplate/> : 
      <> 
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route exact path="/join"><Join/></Route>
        <Route exact path="/callback"><GithubLoginCallback/></Route>
        <Route path="*"><NotFound/></Route>    
       
      </Switch>
      
      </>
    }
    
    </>
  );
}

export default App;
