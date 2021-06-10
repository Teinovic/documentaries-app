import React, {useState} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Main from './pages/home'
import AboutUs from './pages/aboutUsPage'
import HeaderContainer from './containers/header'
import Contact from './pages/contactPage'
import Film from './pages/filmPage'


export default function App() {
    
    return (
            <Router>
                <HeaderContainer />
                <Switch>
                    <Route exact path={ROUTES.HOME}>
                        <Main />
                    </Route>
                    <Route exact path={ROUTES.ABOUT_US}>
                        <AboutUs />
                    </Route>
                    <Route exact path={ROUTES.CONTACT}>
                        <Contact />
                    </Route>
                    <Route exact path={'/Blizanci'}>
                        <Film prop='1'/>
                    </Route>
                    <Route exact path={'/Kanta'}>
                        <Film prop ='2'/>
                    </Route>
                    <Route exact path={'/NeBrzeOdPropisa'}>
                        <Film prop ='3'/>
                    </Route>
                    <Route exact path={'/PozitivnaBiologija'}>
                        <Film prop ='4'/>
                    </Route>
                    <Route exact path={'/PricajMi'}>
                        <Film prop ='5'/>
                    </Route>
                    <Route exact path={'/StvaranSvet'}>
                        <Film prop ='6'/>
                    </Route>
                </Switch>
            </Router>
        
    )
}