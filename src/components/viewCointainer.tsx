import React, { CSSProperties } from 'react';
import MainView from './mainCointainer';
import { View } from './layout';
import DetailView from './detailView';

interface Props{
    onSectionItemClick: (view: View) => void
    view: View
}

export default function ViewCointainer(props: Props){
    if(props.view === "Main"){
        return <MainView onSectionItemClick={props.onSectionItemClick}/>

    }
    return <DetailView view={props.view}/> 

}