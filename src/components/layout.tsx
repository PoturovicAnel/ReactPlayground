import React, { CSSProperties } from 'react';
import Header from './header';
import MainView from './mainCointainer';
import { fullScreen } from '../css';
import whicView from './viewCointainer';
import ViewCointainer from './viewCointainer';

export type View ="Main" | "Forest" | "Desert" | "Sky"
 interface State {
     view: View

}

/** React function component */
export default class Layout extends React.Component<{},State> {

    state: State ={
        view: "Main"
    }

    handleOnHeaderTextClick = () => {
        this.setState({ view: "Main" })

    }
    handleOnSectionItemClick = (view: View) =>{
        this.setState({view})
    }
    

    render(){
        return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Header onHeaderTextClick={this.handleOnHeaderTextClick}/>
                <ViewCointainer 
                    view={this.state.view} 
                    onSectionItemClick={this.handleOnSectionItemClick}
                />
            </div>
        );
    }

}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
