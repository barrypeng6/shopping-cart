import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit(e) {
    const { onSubmitNum } = this.props;
    onSubmitNum(this.state.value);
    this.setState({ value: 1 });
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          min="1"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="加入購物車" />
      </form>
    );
  }
}

InputField.propTypes = {
  onSubmitNum: React.PropTypes.func.isRequired
};

export default InputField;
