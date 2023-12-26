var Increment = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
   render: function() {
    return <div>
      <div id='counter'>{this.state.counter}</div> 
      <button onClick = {this.increment}> + </button> 
     </div>
  }
});

React.render(<Increment />, document.getElementById('mount'))