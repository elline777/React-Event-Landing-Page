import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../ui/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>При покупке билетов до 20 июня</h3>
              <p>
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Власти что, предупредила, жизни заглавных
                речью деревни большого имеет маленький мир свой возвращайся
                путь, коварный текст вдали реторический курсивных пунктуация!
              </p>
              <MyButton
                text="Заказать билеты"
                bck="#ffa800"
                color="#fff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
