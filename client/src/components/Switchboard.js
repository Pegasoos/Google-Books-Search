import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Search from './Saved'
import Saved from './Saved'

const Switchboard = () => {
    <main>
        <Routes>
             <Route exact path = '/' component = {Search} />
             <Route path = '/saved' component = {Saved} />
        </Routes>
    </main>
}
export default Switchboard