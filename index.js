function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation()
  ul.appendChild(li);

  // let employeeName = retrieveEmployeeInformation()
  // document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(e){
    addNewElementAsLi();
    document.querySelector('input').value = '';
    })
  }

function clearEmployeeListOnLinkClick() {
  let clearLink = document.querySelector('a')
  let ul = document.querySelector('ul')
  clearLink.addEventListener('click', function(e){
    ul.innerHTML = '';
  })

  // document.querySelector('ul').remove();
}
