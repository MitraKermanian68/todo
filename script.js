function todoApp() {
    let inputValue = document.querySelector(".content__input");
    let resultBox = document.querySelector(".result");
    let enterKey = document.querySelector("#btn__id");

    if (inputValue.value == "") {
        alert("لطفا داخل باکس را پر کنید ...")
    } else {
        let element = document.createElement("div");
        element.setAttribute("class", "alert alert-primary w-100 d-flex");
        let text = document.createElement("span");
        text.innerHTML = inputValue.value;
        text.setAttribute("class","flex-fill")

        let deletBtn = document.createElement("button");
        deletBtn.innerHTML = `<i class="fa-solid fa-trash" class="d-block"></i>`;
        deletBtn.setAttribute("class", "btn btn-danger");

        resultBox.appendChild(element);
        element.appendChild(text);
        element.appendChild(deletBtn);


        deletBtn.addEventListener("click", function () {
            element.remove(); 
        })

    }
    inputValue.value = "";

    enterKey.addEventListener(function () {
        
          
    })
   
}