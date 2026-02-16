import React from 'react';

// TODO: Destructure the props you need here (header, image, etc.)
class ChildComponent extends React.Component {

  render(){
   return (
    <div className="child-card">
      <h2>{this.props.name}</h2>
      <img src={this.props.status === "Hungry" ? this.props.imageSad : this.props.imageHappy} alt={this.props.name} style={{ width: '200px', height: '200px' }} />
      <p> Status: {this.props.status}</p>
      <button onClick={() => this.props.onAction(this.props.id)}>Give Food</button>

      
     
    </div>
  );
 }
}

export default ChildComponent;
