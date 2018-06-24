import React from 'react';

function arrowHtml(isRaising) {
    let arrowHtml = <i className="fas fa-arrow-up"></i>;
    if (!isRaising) { arrowHtml = <i className="fas fa-arrow-down"></i>; }
    return arrowHtml;
}

const ChangingTable = function (props) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Periods</th>
                    <th scope="col">Change</th>
                    <th scope="col">Change in Percent</th>
                    <th scope="col">Fluctuation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1W</th>
                    <td>{props.changes[0]}</td>
                    <td>{props.changesPercent[0]}</td>
                    <td>{arrowHtml(props.changes[0] > 0)}</td>
                </tr>
                <tr>
                    <th scope="row">1M</th>
                    <td>{props.changes[1]}</td>
                    <td>{props.changesPercent[1]}</td>
                    <td>{arrowHtml(props.changes[1] > 0)}</td>
                </tr>
                <tr>
                    <th scope="row">3M</th>
                    <td>{props.changes[2]}</td>
                    <td>{props.changesPercent[2]}</td>
                    <td>{arrowHtml(props.changes[2] > 0)}</td>
                </tr>
                <tr>
                    <th scope="row">6M</th>
                    <td>{props.changes[3]}</td>
                    <td>{props.changesPercent[3]}</td>
                    <td>{arrowHtml(props.changes[3] > 0)}</td>
                </tr>
                <tr>
                    <th scope="row">1Y</th>
                    <td>{props.changes[4]}</td>
                    <td>{props.changesPercent[4]}</td>
                    <td>{arrowHtml(props.changes[4] > 0)}</td>
                </tr>
                <tr>
                    <th scope="row">All</th>
                    <td>{props.changes[5]}</td>
                    <td>{props.changesPercent[5]}</td>
                    <td>{arrowHtml(props.changes[5] > 0)}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ChangingTable;