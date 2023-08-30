import modulStorage from './serviceStorage.js';
const {data, setTableStorage, removeStorage,
  doneStorage, editStorage} = modulStorage;
import createElem from './createElements.js';
const {createRow} = createElem;
import {renderContacts} from './render.js';

const deleteControl = (btnClear, formInput) => {
  btnClear.addEventListener(`click`, () => {
    formInput.value = ``;
  });
};


const trueControl = (formInput, btnPrimary) => {
  formInput.addEventListener(`input`, () => {
    const str = formInput.value;
    const isEmpty = (str) => {
      if (str.trim() === '') {
        return true;
      }
      return false;
    };
    if (isEmpty(str) === true) {
      btnPrimary.disabled = true;
    } else {
      btnPrimary.disabled = false;
    }
  });
};

const formControl = (form, tbody, formInput, choice) => {
  form.addEventListener(`submit`, e => {
    e.preventDefault();
    const task = formInput.value;
    const taskObj = {task};
    const done = `В процессе`;
    const doneObj = {done};
    const text = `task`;
    const textObj = {text};
    const bg = `table-light`;
    const bgObj = {bg};
    const selectChoice = choice.value;
    const selectChoiceObj = {selectChoice};
    const obj = {...taskObj, ...doneObj, ...textObj,
      ...bgObj, ...selectChoiceObj};
    setTableStorage(obj);
    tbody.append(createRow(obj));
    formInput.value = ``;
  });

  tbody.addEventListener(`click`, e => {
    if (e.target.closest(`.btn-danger`)) {
      const question = confirm(`Вы действительно хотите удалить задание?`);
      if (question === true) {
        const a = e.target.closest(`.order`);
        removeStorage(a.cells[1].textContent);
        e.target.closest(`.order`).remove();
        tbody.rows.innerHTML = ``;
        // renderContacts(tbody, data);
      } else {
        alert(`Удаление отменяется`);
      }
    }

    if (e.target.closest(`.btn-success`)) {
      const a = e.target.closest(`.order`);
      doneStorage(a.cells[1].textContent);
      a.cells[2].textContent = `Выполнена`;
      a.cells[1].classList.remove(`task`);
      a.cells[1].classList.add(`text-decoration-line-through`);
      a.classList.remove(`table-light`);
      a.classList.add(`table-success`);
      a.cells[1].setAttribute(`contenteditable`, false);
    }

    if (e.target.closest(`.btn-edit`)) {
      const a = e.target.closest(`.order`);
      a.cells[1].setAttribute(`contenteditable`, true);
      const edit = a.cells[0].textContent - 1;
      const text = a.cells[1];
      text.addEventListener(`input`, () => {
        const textEdit = text.textContent;
        editStorage(edit, textEdit);
      });
    }
  });
};

export default {
  deleteControl,
  trueControl,
  formControl,
};
