import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  year: z.number().min(1900).max(2022),
  color: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;
