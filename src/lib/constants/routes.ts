interface Routes {
  readonly signIn: string;
  readonly signUp: string;
  readonly teams: string;
  readonly employees: string;
  readonly skills: string;
  readonly newTeam: string;
}

export const routes: Routes = {
  signIn: '/',
  signUp: '/sign-up',
  teams: '/teams',
  employees: '/employees',
  skills: '/skills',
  newTeam: '/teams/new'
};
