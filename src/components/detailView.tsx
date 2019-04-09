import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';
import { View } from './layout';


interface Props {
    view: View
   
}

/** React function component */
export default function DetailView(props: Props) {

    const imageSource = `../../assets/${props.view}.jpg`

    return (
        <div>
            <h1 style={{color : 'White'}}> 
            {props.view} 
            </h1>
            
            <img src={imageSource} style={image}></img>

        </div>

    );
}

const roots: CSSProperties = {
   flexGrow: 1
}
const image: CSSProperties = {
   objectFit: 'cover'
}
