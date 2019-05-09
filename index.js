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
    const newLi = document.createElement("li");
    newLi.innerHTML = retrieveEmployeeInformation();
    document.querySelector("ul.employee-list").appendChild(newLi);
  }

  function addNewLiOnClick() {
      addNewElementAsLi();
      document.querySelector("input").value = "";
    }

  function clearEmployeeListOnLinkClick() {
      document.querySelector("a").addEventListener("click", function() {
        document.querySelector("ul.employee-list").innerHTML = "";
        });
      }