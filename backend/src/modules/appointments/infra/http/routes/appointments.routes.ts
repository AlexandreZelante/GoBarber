import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

// DTO - Data Transfer Object (Use objeto pra transferir dados de um arquivo pra outro)
// SoC: Separation of Concerns (Separação de Preocupação)

// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

appointmentsRouter.use(ensureAthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
