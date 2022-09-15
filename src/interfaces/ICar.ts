import { z } from 'zod';
import { IVehicle, VehicleZodSchema } from './IVehicle';

export const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

export interface ICar extends IVehicle {
  doorsQty: number;
  seatsQty: number;
}
