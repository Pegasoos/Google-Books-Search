import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Searchbar from './Searchbar'
import Saved from './Saved'

function Switchboard() {
    return(
    <main>
        <Routes>
             <Route exact path = '/' element = {<Searchbar />} />
            
        </Routes>
    </main>
    )
}
export default Switchboard