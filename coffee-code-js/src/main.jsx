// Ajudar a identificar problemas na aplicação
import { StrictMode } from 'react';
// Pacote react-dom/client, que é usado para criar a raiz da aplicação no DOM
import { createRoot } from 'react-dom/client';

// Importa o componente principal da aplicação
import App from './App.jsx';

// Seleciona o elemento com o id 'root' no arquivo HTML e cria uma raiz para renderizar a aplicação React
createRoot(document.getElementById('root')).render(
  // O StrictMode envolve a aplicação para ativar verificações adicionais durante o desenvolvimento, sem afetar a renderização em produção
  <StrictMode>
    <App />
  </StrictMode>,
);