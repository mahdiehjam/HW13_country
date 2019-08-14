import React from 'react';
import world from '../world.svg';
import {Input} from '../_components';


function Main(){

    return (
        <div className="App">
          <img src={world} alt="world"/>
          <Input/>
        </div>
    );
}


export {Main}