import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { summaryDonations } from './helpers';
import { Column, Row } from './components/Card'
import CardCustom from './components/CardCustom';
import { AlertBox } from './components/AlertBox';

export default connect((state) => state)(
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        charities: [],
        selectedAmount: 10,
      };
    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          self.setState({ charities: data });
        });

      fetch('http://localhost:3001/payments')
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => item.amount)),
          });
        });
    }

    render() {
      const self = this;
      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <div>
          <h1 style={{
            textAlign: 'center',
            fontFamily: 'sans-serif',
            color: '#777',
          }}>Tamboon React</h1>
          <p>All donations: {donate}</p>
          {message && <AlertBox>{message}</AlertBox>}

          <Row>
            {self.state.charities.map((charitie, idx) =>
              <Column key={idx}>
                <CardCustom charities={charitie} />
              </Column>,
            )}
          </Row>
        </div>
      );
    }
  },
);
