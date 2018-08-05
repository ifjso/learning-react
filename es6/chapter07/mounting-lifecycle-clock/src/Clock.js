import { Component } from 'react';
import { getClockTime } from './clocklib';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = getClockTime();
    }

    componentDidMount() {
        console.log("시계 시작 중");
        this.ticking = setInterval(() => this.setState(getClockTime()), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticking);
        console.log("시계 중단 중");
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state;

        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{ampm}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        );
    }
}

Clock.displayName = 'Clock';

export default Clock;
