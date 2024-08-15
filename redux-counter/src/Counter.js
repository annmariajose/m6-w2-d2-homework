import React from "react";
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch({type: 'INCREMENT'});
    }

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'});
    }

    reset = () => {
        this.props.dispatch({type: 'RESET'});
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div className="p-3 bg-info w-25">
                    <span className="text-white p-2 border">{this.props.count}</span>
                    <button onClick={this.decrement} className="m-2">-</button>
                    <button onClick={this.increment} className="m-2">+</button>
                    <button onClick={this.reset} className="m-2">reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);