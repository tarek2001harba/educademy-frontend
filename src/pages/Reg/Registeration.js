import React from 'react'
import Button from '../../components/Button'
import { Switch, Route } from 'react-router-dom'

//componenets
import Pagination from '../../components/Pagination'
import Field from '../../components/Field'

//css
import './reg.css'
const Registeration = () => {
    return (
        <div className="reg">
            <div className="reg__pagination-container">
                <Pagination sections={["Sign In", "Sign Up"]}/>
            </div>
            <Switch>
                <Route path="/registeration/sign-in">
                    <form className="reg__form" action="">
                        <h4 className="reg__title">Sign In</h4>
                        <Field id="sigin-email" fieldName="E-mail" />
                        <Field id="sigin-pwd" fieldName="Password" last={true}/>                        
                        <Button type="filled" width="100%" text="Sign In"/>
                    </form>
                </Route>
                <Route path="/registeration/sign-up">
                    <form className="reg__form" action="">
                        <h4 className="reg__title">Sign Up</h4>
                        <Field id="signup-fname" fieldName="First Name" />
                        <Field id="signup-lanme" fieldName="Last Name" />
                        <Field id="signup-country" fieldName="Country" />
                        <Field id="signup-adrs" fieldName="Address" />
                        <Field id="signup-email" fieldName="E-mail" />
                        <Field id="signup-pwd" fieldName="Password" />
                        <Field id="signup-type" fieldName="Account Type" inputType="select" options={["Teacher", "Student"]} last={true}/>
                        <Button type="filled" width="100%" text="Sign Up"/>
                    </form>
                </Route>
            </Switch>
        </div>
    )
}

export default Registeration
