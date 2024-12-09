import  React  from 'react';
import './banner.css';

export class Banner extends React.Component {
  render() {
    return  (
    <div className="banner">
        <div className="banner_content">
            <h1 className="banner_title">{this.props.title}</h1>
            <p>{this.props.text}</p>
            <a href="/sale" className="banner-button">{this.props.name}</a>
        </div>
    </div>
    )
  }
}