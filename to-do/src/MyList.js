import { Component } from 'react';
import check from './Checkmark.png';

export class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            MyList: []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e)
    }

    addItem(input) {
        if (input === '') {
            alert("Please add an item")
        }
        else {
        let listArray = this.state.MyList;
        listArray.push(input);
        this.setState({MyList: listArray, userInput:''});
        }
    }

    deleteItem() {
        let listArray = this.state.MyList;
        listArray = [];
        this.setState ({MyList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }
        render() {
            return(
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <div className='container'>
                            <input type="text" 
                            placeholder="What would you like to add to the list?"
                            onChange={(e) => {this.onChangeEvent(e.target.value)}}
                            value={this.state.userInput} />
                        </div>
                        <div className='container'>
                            <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>Add</button>
                        </div>
                        <ul>
                            {this.state.MyList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img src={check} width="20px" alt='checkmark'/>
                                {item}
                                </li>
                            ))}
                        </ul>
                        <div className='container'>
                            <button onClick={() => this.deleteItem()} className='btn delete'>Delete</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
