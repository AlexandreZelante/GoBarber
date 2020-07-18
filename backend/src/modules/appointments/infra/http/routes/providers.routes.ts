import { Router } from 'express';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();

// DTO - Data Transfer Object (Use objeto pra transferir dados de um arquivo pra outro)
// SoC: Separation of Concerns (Separação de Preocupação)

// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

providersRouter.use(ensureAthenticated);

providersRouter.get('/', providersController.index);

export default providersRouter;
