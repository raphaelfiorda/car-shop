import chai from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Request, Response } from 'express';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { carBodyMock, carResponseMock } from '../../mocks/carMocks';

const { expect } = chai;

describe('Testa a camada service de Car', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  after(()=>{
    sinon.restore();
  })

  describe('Verifica o método create', async () => {
    it('Em caso de sucesso, retorna o objeto esperado', async () => {
      sinon.stub(carService, 'create').resolves(carResponseMock);
      req.body = carBodyMock;

      await carController.create(req, res);
      expect((res.status as SinonStub).calledWith(201)).to.be.true;
      expect((res.json as SinonStub).calledWith(carResponseMock)).to.be.true;
    });
  });
});