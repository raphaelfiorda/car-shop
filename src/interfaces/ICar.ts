import { z } from 'zod';
import { IVehicle, VehicleZodSchema } from './IVehicle';

export const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z
    .number({
      required_error: 'Year is required',
      invalid_type_error: 'Year must be a number',
    })
    .min(2, { message: 'Must have at least 2 doors' })
    .max(4, { message: 'Must have at most 4 doors' }),
  seatsQty: z
    .number({
      required_error: 'Year is required',
      invalid_type_error: 'Year must be a number',
    })
    .min(2, { message: 'Must have at least 2 seats' })
    .max(7, { message: 'Must have at most 7 seats' }),
});

export interface ICar extends IVehicle {
  doorsQty: number;
  seatsQty: number;
}
