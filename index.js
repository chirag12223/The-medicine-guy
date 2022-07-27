console.log("Hi");
function Medicine(Name, Salt, Specification) {
  this.Name = Name;
  this.Salt = Salt;
  this.Specification = Specification;
}
function Display() {}
Display.prototype.add = function (medicine) {
  console.log("adding");
  tableBody = document.getElementById("tableBody");
  let uiString = `
    <tr>
                <td>${medicine.Name}</td>
                <td>${medicine.Salt}</td>
                <td>${medicine.Specification}</td>
              </tr>
    `;
  tableBody.innerHTML += uiString;
};
Display.prototype.clear = function () {
  let medicineform = document.getElementById("medicinename1");
  medicineform.reset();
};
Display.prototype.validate = function (medicine) {
    if(medicine.Name.length<3 || medicine.Salt.length<3){
        return false;
    }return true;
  };
  Display.prototype.show = function (what,message) {
    let alrt=document.getElementById('alerting');
    alrt.innerHTML=`
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Message=>${message}</strong> 
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`
  };
let medicineform = document.getElementById("medicinename1");
medicineform.addEventListener("submit", formSubmit);
function formSubmit(e) {
  console.log("You have added");
  let Name = document.getElementById("medicinename").value;
  let Salt = document.getElementById("saltname").value;
  let Specification;
  let gridRadios1 = document.getElementById("gridRadios1");
  let gridRadios2 = document.getElementById("gridRadios2");
  let gridRadios3 = document.getElementById("gridRadios3");
  if (gridRadios1.checked) {
    Specification = gridRadios1.value;
  } else if (gridRadios2.checked) {
    Specification = gridRadios2.value;
  } else if (gridRadios3.checked) {
    Specification = gridRadios3.value;
  }
  let medicine = new Medicine(Name, Salt, Specification);
  console.log(medicine);
  let display = new Display();
  if (display.validate(medicine)) {
    display.add(medicine);
    display.clear();
    display.show('Success',"Medicine has been added");
  }else{
    display.show('Error',"Sorry");
  }

  
  e.preventDefault();
}
