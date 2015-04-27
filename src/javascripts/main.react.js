import React from 'react'
import {CircGraph} from './CircGraph.react'


/*
 * Object Prototype Inheritance
 * This is how to instantiate a class in javascript
 */

function ThisAwesomeFunction() { // This is a class technically
  this.property = 15
  this.emptyProperty = []
  console.log('>>>>>>>>>>>>> This awesome function:', this)
}

ThisAwesomeFunction.prototype = {
  addProp: function(x) {
    console.info('>>>>>>>>>> Called ThisAwesomeFunction Class addProp Prototype')
    this.emptyProperty.push(x)
  }
}

ThisAwesomeFunction.prototype.addToEmptyPrototype = function(x) {
  console.info('>>>>>>>>>> Called ThisAwesomeFunction Class addToEmptyPrototype Prototype')
  this.emptyProperty.push(x)
}

function ChildClass(x, y) {
  ThisAwesomeFunction.call(this) // Inherit property of ThisAwesomeFunction class
  console.info(x)
  console.info(y)
  console.info('>>>>>>>>>>>>>>>>>> the state of childClass func:', this)
  this.emptyProperty.push(x, y)
}

ChildClass.prototype = Object.create(ThisAwesomeFunction.prototype) // Extend ThisAwesomeFunction class with ChildClass
ChildClass.prototype.constructor = ChildClass // Construct final form of ChildClass class after inheritance, now ready to use


/*
 * ES6 Javascript Classes
 * JS Prototype Inheritance awesome replacement
 */

class Person {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
  printCurrentPerson() {
    console.log(`Name: ${this.name} \n Age: ${this.age} \n Sex: ${this.sex}`)
  }
}

class Adult extends Person {
  constructor(name, age, sex, job) {
    super(name, age, sex) // super is the parent class props
    this.job = job
  }
  printCurrentPerson() {
    super.printCurrentPerson() // call parent function
    console.log(`Job: ${this.job}`)
  }
}


class MainLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'fafooo',
      age: 18
    }
  }
  componentDidMount() {

    var gold = new ThisAwesomeFunction() // Initiate Class
    gold.addProp(20)
    console.log('>>>>>>>>>>>>>>>>> Gold Empty Prop now added 20 in the array:', gold.emptyProperty)
    gold.addToEmptyPrototype(666)
    console.log('>>>>>>>>>>>>>>>>> Gold Empty Prop now added 666 in the array:', gold.emptyProperty)

    let newSubsetClass = new ChildClass('greg', 'awesome')
    console.info('>>>>>>>>>>>>>>>>>> newSubsetClass', newSubsetClass)

    let greg = new Person('Gregory', 18, 'Male')
    console.info('>>>>>>>>>>>>>>>>>> Person greg obj:', greg)
    greg.printCurrentPerson()

    let gregBeAnAdult = new Adult('Gregory', 21, 'Male', 'Programmer')
    gregBeAnAdult.printCurrentPerson()

    this.setState({
      name: 'NewName'
    })


  }
  render() {
    return (
      <div>
        <h1>lorem ipsum dolor sit amet jojojo hahaha ES6 FF {this.state.name}</h1>
        <GenericButton buttonName='Generic Button bro' />
        <CircGraph info={this.props.info} />
      </div>
    )
  }
}

class GenericButton extends React.Component {
  render() {
    return (
      <button>{this.props.buttonName}</button>
    )
  }
}

React.render(<MainLayout />, document.getElementById('layout'))
