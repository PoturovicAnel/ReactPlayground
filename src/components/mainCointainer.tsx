import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';


interface Props {
}

/** React function component */
export default function MainView(props: Props) {

    const sectionIds: View[] = ['Forest', 'Sky', 'Desert'];

    return (
        <div style={container}>
            {sectionIds.map((value) =>
                <SectionItem key={value} view={value}/>)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
}