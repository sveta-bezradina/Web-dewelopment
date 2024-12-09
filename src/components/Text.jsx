import  React  from 'react';


export class Text extends React.Component {
  render() {
    return <div >{this.props.name}</div>;
  }
}

export class Title extends React.Component {
  render() {
    return <div className="MainText">{this.props.text}</div>;
  }
}
