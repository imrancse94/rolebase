import React from 'react'
import DefaultLayout from './containers/DefaultLayout';

class Main extends React.Component {
    
    render() {
        return (

            <div>
                {!this.props.loggedIn ? (
                    <React.Fragment>
                        <DefaultLayout {...this.props}  />
                    </React.Fragment>
                ) 
                :  this.props.children
                }
            </div>);

    }
}


export default Main;
