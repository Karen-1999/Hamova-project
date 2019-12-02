import React, {Component} from 'react';
import './Meal.css';
import Routes from './routes';
import SERVER_URL from './consts.js'


const Meal = (props) => {
    const some = props.match.params.name
    const [message, setMessage] = React.useState('???');
    function getInfo() {
        console.log('Hmmmmm');
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://localhost:8080'

        fetch(targetUrl + '/' + some)
            .then(r => {
                return r.json();
            }).then(data => {
                setMessage(data.description);
            /*this.state.name = data.name;
            this.state.description = data.description;*/
        })
    }
    return(
        <div>
            <h1>Hi there this is {some} and it is {message}</h1>
            <button onClick={getInfo}>
                Get Description
            </button>
        </div>
    );
}

/*class Meal extends Component {
    constructor(props)
    {
        super(props);
        this.state = {name: '', description: ''};
        this.getInfo();
        this.render();
    }

componentDidMount() {
        const { name } = this.props.match.name;
        this.getInfo(name);
        console.log(name);
}

    render() {
        return (<React.Fragment>
            <Routes/>
            <div>
                <h1>
                    Hi, this is {this.state.name}
                </h1>
                <h2>
                    {this.state.description}
                </h2>
            </div>
        </React.Fragment>);
    }


    getInfo = () => {
        console.log('Hmmmmm');
        fetch(SERVER_URL + '/' + this.props.name)
            .then(r => {
                return r.json();
            }).then(data => {
            this.state.name = data.name;
            this.state.description = data.description;
        })

    }
}*/
export default Meal;

