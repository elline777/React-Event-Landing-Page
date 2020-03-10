import React, { Component } from 'react';
import MyButton from '../ui/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.',
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.',
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.'
    ],
    linkto: ['http://sales/b', 'http://sales/b', 'http://sales/b'],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                link={this.state.linkto[i]}
                color="#fff"
                bck="#ffa800"
                text="Заказать билеты"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Цены</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
