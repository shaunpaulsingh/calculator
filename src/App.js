import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <div>Simple React Calculator</div>
      <br></br>
      <CalculatorComponent />
    </div>
  );
}

class CalculatorComponent extends Component{
  constructor(props){
    super(props)

    this.state = {
           counter : 0,
           operator : '',
           counter2 : 0
    }

    this.keyDown = this.keyDown.bind(this);
    this.operatorDown = this.operatorDown.bind(this);
  }
  

  render () {
    return (
      <>
        <div className='numdisplay'>{this.state.counter}</div>
        <Buttons keyDown = {this.keyDown} operatorDown = {this.operatorDown}/>
      </>
    )
  }

  keyDown (num) {
    console.log(num)
    this.setState( 
      {counter: this.state.counter + num});
  }

  operatorDown (op) {
    console.log(op)

    if(op !== '='){ 
      this.setState(
        {
        counter2 : this.state.counter,
        counter: 0,
        operator: op}
      );
    }

    if(op === '='){

      console.log("Operator: " + this.state.operator);
      this.setState({operator: op});

      if (this.state.operator === '+'){
        this.setState({
          counter : parseInt(this.state.counter) + parseInt(this.state.counter2)
        })
      }else if (this.state.operator === '-'){
        this.setState({
          counter : parseInt(this.state.counter) - parseInt(this.state.counter2)
        })
      }else if (this.state.operator === '*'){
        this.setState({
          counter : parseInt(this.state.counter) * parseInt(this.state.counter2)
        })
      }else if (this.state.operator === '/'){
        this.setState({
          counter : parseInt(this.state.counter) / parseInt(this.state.counter2)
        })
      }
      
    }
    op = '';

  }

}

class Display extends Component{
  render () {
    return (
      <>
        <div>This is the number</div>
      </>
    )
  }
}

class Buttons extends Component{
  constructor(props){
    super(props)
  }

  keyDown (num) {
    //console.log(num)
  }

  operatorDown (op) {
    //console.log(op)
  }

  render () {
    return (
      <>
        <div>
          <table>
            <tr>
              <td><button onClick={ () =>this.props.keyDown("1")}>1</button></td>
              <td><button onClick={ () =>this.props.keyDown("2")}>2</button></td>
              <td><button onClick={ () =>this.props.keyDown("3")}>3</button></td>
            </tr>
            <tr>
              <td><button onClick={ () =>this.props.keyDown("4")}>4</button></td>
              <td><button onClick={ () =>this.props.keyDown("5")}>5</button></td>
              <td><button onClick={ () =>this.props.keyDown("6")}>6</button></td>
            </tr>
            <tr>
              <td><button onClick={ () =>this.props.keyDown("7")}>7</button></td>
              <td><button onClick={ () =>this.props.keyDown("8")}>8</button></td>
              <td><button onClick={ () =>this.props.keyDown("9")}>9</button></td>
            </tr>
            <tr>
              <td><button onClick={ () =>this.props.operatorDown("*")}>*</button></td>
              <td><button onClick={ () =>this.props.keyDown("0")}>0</button></td>
              <td><button onClick={ () =>this.props.operatorDown("/")}>/</button></td>
            </tr>
            <tr>
              <td><button onClick={ () =>this.props.operatorDown("+")}>+</button></td>
              <td><button onClick={ () =>this.props.operatorDown("=")}>=</button></td>
              <td><button onClick={ () =>this.props.operatorDown("-")}>-</button></td>
            </tr>
          </table>
        </div>
      </>
    )
  }
}

export default App;
