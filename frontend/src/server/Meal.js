import React, {Component} from 'react';
import './Meal.css';
import SERVER_URL from './consts.js'
const Meal = (props) => {
    const some = props.match.params.name
    const [message, setMessage] = React.useState('?desc?');

    function getInfo() {
        console.log('getInfo called');
        fetch(SERVER_URL + '/' + some)
            .then(r => {
                return r.json();
            }).then(data => {
                setMessage(data.description);
        })
    }

    const [productName, setName] = React.useState('?name?');
    function getName() {
        console.log('getInfo called');
        fetch(SERVER_URL + '/' + some)
            .then(r => {
                return r.json();
            }).then(data => {
            setName(data.name);
        })
    }

    const [ingredients, setIngredients] = React.useState('?ingr?');
    function getIngredients() {
        console.log('getInfo called');
        fetch(SERVER_URL + '/' + some)
            .then(r => {
                return r.json();
            }).then(data => {
            //set ingredients when it will be ready
            setIngredients(data.ingredients);

        })
    }

    getInfo();
    getName();
    getIngredients();
    var str = ingredients;
    str = str.split('\\n').map(i => {
        return <p>- {i}</p>
    });
    return(
        <div>
            <div className='centered'>
                <h1>This is {productName}</h1>
                <img src={require('../images/' + some + '.jpg')}/>
            </div>
            <div className="row">
                <div className="column">
                    <div>
                        <h3>
                            Description
                        </h3>
                        {message}
                    </div>
                </div>
                <div className="column">
                    <div>
                        <h3>
                            Ingredients
                        </h3>
                        {str}
                    </div>
                </div>
            </div>
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

