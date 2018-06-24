import React from 'react'
import { getHistorical } from '../apiServices';

class ChartBtns extends React.Component {

    componentDidMount() {

        let btns = document.querySelectorAll('.btn-group .btn');
        btns.forEach((element) => {
            element.addEventListener("click", function () {
                btns.forEach((btn) => { btn.classList.remove('active') });
                element.classList.toggle("active");
            });
        });
    }

    render() {
        const comp = this.props.comp;

        return (

            <div style={{ float: 'right' }} className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light" onClick={function () { getHistorical(comp, 7) }}>1W</button>
                <button type="button" className="btn btn-light" onClick={function () { getHistorical(comp, 31) }}>1M</button>
                <button type="button" className="btn btn-light" onClick={function () { getHistorical(comp, 91) }}>3M</button>
                <button type="button" className="btn btn-light" onClick={function () { getHistorical(comp, 182) }}>6M</button>
                <button type="button" className="btn btn-light active" onClick={function () { getHistorical(comp, 365) }}>1Y</button>
                <button type="button" className="btn btn-light" onClick={function () { getHistorical(comp, 3000) }}>All</button>
            </div>
        );
    }
}

export default ChartBtns;
