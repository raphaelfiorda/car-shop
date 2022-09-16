import chai from 'chai';
import sinon from 'sinon';
import { ZodError } from 'zod';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carBodyMock, carResponseMock } from '../../mocks/carMocks';

const { expect } = chai;

describe('Testa a camada service de Car', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  after(()=>{
    sinon.restore();
  })

  describe('Verifica o método create', async () => {
    it('Em caso de sucesso, retorna o objeto esperado', async () => {
      sinon.stub(carModel, 'create').resolves(carResponseMock);

      const carCreated = await carService.create(carBodyMock);
      expect(carCreated).to.be.deep.equal(carResponseMock);
    });

    it('Em caso de falha, lança o erro', async () => {
      try {
        await carService.create({} as any);
      } catch (err) {
        expect(err).to.be.instanceOf(ZodError)
      }
    });
  });
});