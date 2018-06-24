import React from 'react';
import { fetchNew } from '../apiServices';
import Realtime from './Realtime';
import ChangingTable from './ChangingTable';

class Fluc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            periods: [],
            changes: [],
            changesPercent: []
        };
    }

    componentDidMount() {
        // get data and set states
        fetchNew(this, [7, 31, 91, 182, 365, 2896]);
    }

    render() {
        return (
            <div>
                <Realtime />
                <br />
                <ChangingTable changes={this.state.changes} changesPercent={this.state.changesPercent} />
            </div>
        );
    }
}

export default Fluc;