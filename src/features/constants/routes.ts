interface Routes {
  readonly signIn: string;
  readonly signUp: string;
  readonly teams: string;
  readonly employees: string;
  readonly skills: string;
}

export const routes: Routes = {
  signIn: '/',
  signUp: '/sign-up',
  teams: '/teams',
  employees: '/employees',
  skills: '/skills'
};
