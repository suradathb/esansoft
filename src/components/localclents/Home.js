import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:""
        }
    }

    render() {
        return (
            <>
                <Header/>
                <h1>Home User Local</h1>
                <Footer/>
            </>
        );
    }
}


export default Home;