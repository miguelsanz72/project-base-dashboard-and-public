import { LoginEffects, ActivateAccountEffects } from './auth';
import { RouterEffects } from './router.effect';

export const effects: any[] = [RouterEffects, ActivateAccountEffects, LoginEffects];
