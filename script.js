import modulControl from './modules/control.js';
import {renderCRM, renderContacts} from './modules/render.js';
import modulStorage from './modules/serviceStorage.js';
const {data} = modulStorage;

const {
  deleteControl,
  trueControl,
  formControl,
} = modulControl;

const init = () => {
  const {
    tbody,
    form,
    formInput,
    btnPrimary,
    btnClear,
  } = renderCRM();

  renderContacts(tbody, data);
  deleteControl(btnClear, formInput);
  trueControl(formInput, btnPrimary, tbody);
  formControl(form, tbody, formInput);
};

init();
