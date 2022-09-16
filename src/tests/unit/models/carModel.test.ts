import chai from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
// import { ErrorTypes } from '../../../middlewares/errorCatalog';
import { carBodyMock, carResponseMock } from '../../mocks/carMocks';

const { expect } = chai;

describe('Testa a camada model de Car', () => {
  const carModel = new CarModel();

  after(()=>{
    sinon.restore();
  })

  describe('Verifica o método create', async () => {
    it('Em caso de sucesso, retorna o objeto esperado', async () => {
      sinon.stub(Model, 'create').resolves(carResponseMock);

      const carCreated = await carModel.create(carBodyMock);
      expect(carCreated).to.be.deep.equal(carResponseMock);
    })
  });
});