import createElem from './createElements.js';
const {createRow} = createElem;

export const renderCRM = () => {
  const table = document.querySelector(`table`);
  const tbody = table.tBodies[0];
  const form = document.querySelector(`form`);
  const formInput = document.querySelector(`.form-control`);
  const btnPrimary = document.querySelector(`.btn-primary`);
  btnPrimary.disabled = true;
  const btnClear = document.querySelector(`.btn-warning`);

  return {
    tbody,
    form,
    formInput,
    btnPrimary,
    btnClear,
  };
};

export const renderContacts = (tbody, data) => {
  const allRow = data.map(createRow);
  tbody.append(...allRow);
};
