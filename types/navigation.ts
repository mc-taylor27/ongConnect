// Objetivo 1: Definição de tipos (O Mapa Mágico)
export type RootStackParamList = {
  index: undefined; // Rota 'Home' (Verde)
  login: undefined; // Rota 'Login'
  dashboard: { userName: string; voluntarioId: string }; // Recebe obrigatoriamente nome e ID
};