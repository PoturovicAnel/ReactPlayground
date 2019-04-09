import React, { CSSProperties } from 'react';
import MainView from './mainCointainer';
import DetailView from './detailView';
import { Route } from 'react-router';


export default function ViewCointainer(){
   return (
    <div>
            <Route exact path="/" component={MainView} />
            <Route path="/forest" render={() => <DetailView view="Forest"/>} />
            <Route path="/sky" render={() => <DetailView view="Sky"/>} />
            <Route path="/desert" render={() => <DetailView view="Desert"/>} />
            
    </div>

   )

}