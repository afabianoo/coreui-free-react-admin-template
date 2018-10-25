import React, { Component } from 'react';
import { Card, Col, Row } from 'reactstrap';


class FluxoDeCaixa extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info" style={{ height: '70px' }}>
              Fluxo diário
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info" style={{ height: '70px' }}>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info" style={{ height: '70px' }}>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info" style={{ height: '70px' }}>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FluxoDeCaixa;
