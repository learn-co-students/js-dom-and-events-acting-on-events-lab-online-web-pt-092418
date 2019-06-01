function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(li);
  document.querySelector('input').value = ''
}

function addNewLiOnClick() {
  document.querySelector('input').addEventListener('submit',
    addNewElementAsLi())
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function () {
    let list = document.querySelector('ul');
    while (list.hasChildNodes()) {
      list.removeChild(list.lastChild);
    }
  });
}
