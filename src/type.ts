import { IAdminUserUseCase } from "./useCase/inputPort/admin/user.js";
import { IAuthUseCase } from "./useCase/inputPort/auth.js";
import { IEventUseCase } from "./useCase/inputPort/event.js";

export type Deps = {
  eventUseCase: IEventUseCase;
  authUseCase: IAuthUseCase;
  adminUserUseCase: IAdminUserUseCase;
};

export type AppType = {
  Variables: {
    deps: Deps;
  };
};
