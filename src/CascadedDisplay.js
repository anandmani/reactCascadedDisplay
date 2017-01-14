import React, {Component, PureComponent} from 'react';


class TabOne extends PureComponent{
  render(){
    console.log("Rendering "+ this.props.index);
    return(
      <div style={{ flex: 1, boxShadow: "-3px 0 7px -2px rgba(0,0,0,.15)", display: (this.props.visible)? "block": "none" }}>
        {this.props.content}
        <button onClick={this.props.showNext}>Open Two</button>
      </div>
    );
  }
}

class CascadedDisplay extends Component{

  constructor(){
    super();
    this.state = { twoVisible: false, threeVisible: false};
  }

  showTwo = () => {
    this.setState({twoVisible: true});
  }

  showThree = () => {
    this.setState({threeVisible: true});
  }

  dummy = () => {  }

  render(){
    return(
      <div style={{ display: "flex", minHeight: 600, backgroundColor: "white"}}>
        <TabOne
          index ={1}
          visible = {true}
          content = {this.props.one}
          showNext = {this.showTwo}
        />
        <TabOne
          index = {2}
          visible = {this.state.twoVisible}
          content = {this.props.two}
          showNext = {this.showThree}
        />
        <TabOne
          index = {3}
          visible = {this.state.threeVisible}
          content = {this.props.three}
          showNext = {this.dummy}
        />
      </div>
    );
  }

}

export default CascadedDisplay;
