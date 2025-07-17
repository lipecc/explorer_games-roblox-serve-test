
import React from 'react';

const EmptyState: React.FC = () => (
  <div className="text-center py-16 px-8 bg-slate-800/30 rounded-lg">
    <h3 className="text-2xl font-bold text-white mb-2">Nenhum jogo encontrado</h3>
    <p className="text-slate-400">Tente ajustar sua pesquisa ou selecionar uma categoria diferente.</p>
  </div>
);

export default EmptyState;
