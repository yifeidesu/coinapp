
import React from 'react';
import { setLastWeekChange } from '../apiServices';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), chartName: '',
            usdRate: 'Loading...', lastUpdate: ''
        };
    }

    componentDidMount() {
        setLastWeekChange(this);
        console.log(this.state);
        console.log(this);
        
        
        
    }



    render() {
        return (
            <div>
                <h1>last week average</h1>
                <p></p>
            </div>
        );
    }
}

export default Home;