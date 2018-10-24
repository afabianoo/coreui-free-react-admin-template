import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row } from 'reactstrap';

class ProductForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>Cadastrar produto</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="nome">Nome do produto</Label>
                  <Input type="text" id="nome" placeholder="Insira o nome do produto" />
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="9">
                    <FormGroup>
                      <Label htmlFor="codigo">Código de barras</Label>
                      <Input type="text" id="codigo" placeholder="Insira o código de barras" />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="quantidade">Quantidade</Label>
                      <Input type="number" id="quantidade" placeholder="Quant." />
                    </FormGroup>
                  </Col>
                  </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="valor-venda">Valor de venda</Label>
                      <Input type="number" id="valor-venda" placeholder="Valor de venda" />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="valor-compra">Valor de compra</Label>
                      <Input type="number" id="valor-compra" placeholder="Valor de compra" />
                    </FormGroup>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductForm;
