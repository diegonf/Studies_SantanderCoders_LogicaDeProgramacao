export const checarDiaSemana = (data = new Date()) => {
  const dia = data.getDay();
  const segunda = 1;

  if(dia === segunda) return true;
  return false;
};

