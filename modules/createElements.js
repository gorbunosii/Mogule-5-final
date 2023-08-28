import modulStorage from './serviceStorage.js';
const {taskNumberStorage} = modulStorage;

const createRow = ({task, done, text, bg, selectChoise}) => {
  const tr = document.createElement('tr');
  tr.classList.add(`order`);
  tr.classList.add(bg);

  const tdNumber = document.createElement('td');
  tdNumber.textContent = taskNumberStorage(task) + 1;

  const tdTask = document.createElement('td');
  tdTask.classList.add(text);
  tdTask.textContent = task;

  const tdStatus = document.createElement('td');
  tdStatus.textContent = done;

  const tdChoice = document.createElement('td');
  tdChoice.textContent = selectChoise;

  const tdDander = document.createElement('td');
  const btnDelete = document.createElement('button');
  btnDelete.classList.add(`btn`);
  btnDelete.classList.add(`btn-danger`);
  btnDelete.classList.add(`me-3`);
  btnDelete.textContent = `Удалить`;
  const btnComplete = document.createElement('button');
  btnComplete.classList.add(`btn`);
  btnComplete.classList.add(`btn-success`);
  btnComplete.classList.add(`me-3`);
  btnComplete.textContent = `Завершить`;
  const btnEdit = document.createElement('button');
  btnEdit.classList.add(`btn`);
  btnEdit.classList.add(`btn-edit`);
  btnEdit.textContent = `Редактировать`;
  tdDander.append(btnDelete, btnComplete, btnEdit);

  tr.classList.add(`order`);
  tr.append(tdNumber, tdTask, tdStatus, tdChoice, tdDander);

  return tr;
};

const createSelect = (btnPrimary) => {
  const select = document.createElement('select');
  select.classList.add(`select`);
  select.classList.add(`me-3`);
  select.options[0] = new Option('table-light', 'light', true);
  select.options[1] = new Option('table-warning', 'warning');
  select.options[2] = new Option('table-danger', 'danger');
  btnPrimary.before(select);

  return select;
};

export default {
  createRow,
  createSelect,
};

