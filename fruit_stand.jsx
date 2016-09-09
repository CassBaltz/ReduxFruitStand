import React from 'react';

class FruitStand extends React.Component {
  constructor (props) {
    super(props);
    this.state = {fruitValue: ""};
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update (e) {
    e.preventDefault();
    this.setState({fruitValue: e.target.value});
  }

  submit (e) {
    e.preventDefault();
    this.props.addFruit(this.state.fruitValue);
  }

  render() {
		return (
      <section>
        <ul>
  			{this.props.fruit.map((fruit, idx) => (
  				<li key={idx}>{fruit}</li>
  			))}
  			</ul>
        <button onClick={this.props.addOrange}>Add Orange</button>
        <form onSubmit={this.submit}>
          <input type='text' value={this.state.fruitValue}
             onChange={this.update}>
          </input>
          <button>Add Fruit</button>
        </form>
      </section>
    );
	}
}

export default FruitStand;
