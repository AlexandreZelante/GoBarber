import { Router } from 'express';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

// DTO - Data Transfer Object (Use objeto pra transferir dados de um arquivo pra outro)
// SoC: Separation of Concerns (Separação de Preocupação)

// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

appointmentsRouter.use(ensureAthenticated);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
