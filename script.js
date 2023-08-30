import moduleControl from './modules/control.js';
import {renderCRM, renderContacts} from './modules/render.js';
import modulStorage from './modules/serviceStorage.js';
const {data} = modulStorage;
import createElem from './modules/createElements.js';
const {createSelect} = createElem;

const {
  deleteControl,
  trueControl,
  formControl,
} = moduleControl;

const init = () => {
  const {
    tbody,
    form,
    formInput,
    btnPrimary,
    btnClear,
  } = renderCRM();

  const choice = createSelect(btnPrimary);

  renderContacts(tbody, data);
  deleteControl(btnClear, formInput);
  trueControl(formInput, btnPrimary, tbody);
  formControl(form, tbody, formInput, choice);
};

init();
