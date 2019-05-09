function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
 return  document.querySelector('input').value
}; 

function addNewElementAsLi() {
  return retrieveEmployeeInformation.innerHTMl.appendChild('li');
}

function addNewLiOnClick() {
  return let submit = document.querySelector('input[type="submit"]')
  let event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
}