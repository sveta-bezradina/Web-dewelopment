import  React  from 'react';

export class Card extends React.Component {
  render() {
    return  (
    <div className="card">
        <img src ={this.props.link}  alt = "Error"></img>
        <div className="card__content">
            <h3 className="card__title">{this.props.title}</h3>
            <p className="card__description">{this.props.text}</p>
        </div>
    </div>
    )
  }
}