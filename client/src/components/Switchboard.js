import React from 'react'
import {Switch, Root} from 'react-router-dom'
import Search from './Saved'
import Saved from './Saved'

const Switchboard = () => {
    <main>
        <Switch>
             <Route exact path = '/' component = {Search} />
             <Route path = '/saved' component = {Saved} />
        </Switch>
    </main>
}
export default Switchboard