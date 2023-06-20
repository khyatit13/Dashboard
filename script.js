

dropdown.addEventListener("change", function () {
    const dropdown = document.getElementById("dropdown");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    // Show default page (Page 1)
    page1.classList.add("active");
    if (dropdown.value === "page1") {
        page1.classList.add("active");
        page2.classList.remove("active");
    } else if (dropdown.value === "page2") {
        page1.classList.remove("active");
        page2.classList.add("active");
    }
});
var checkboxes = document.querySelectorAll('input[type=checkbox]');

console.log(checkboxes);

function save() {
    for (i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i].value)
        console.log(checkboxes[i].checked)
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
    }
}

function load_() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true : false;
    }
}

window.onload = function () {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true : false;
    }
}

function myFunction() {
    // var x = document.getElementById("mySelect").value;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySelect").value;

    console.log(input);
    filter = input.toUpperCase();
    console.log("FILTER" + filter);
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    if (filter == "ALL") {
        for (i = 0; i < tr.length; i++) {

            td = tr[i].getElementsByTagName("td")[0];
            console.log("the value of filter" + filter);

            if (td) {


                tr[i].style.display = "";

            }



        }

    }
    else {

        for (i = 0; i < tr.length; i++) {

            td = tr[i].getElementsByTagName("td")[0];
            console.log("the value of filter" + filter);

            // if (td) {

            //   txtValue = td.textContent || td.innerText;
            //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //     tr[i].style.display = "";
            //   } else {
            //     tr[i].style.display = "none";
            //   }
            // }


            if (td) {
                console.log("the value of td.textContent" + td.textContent);
                console.log("the value of td.innerText" + td.innerText);
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar1");
var sticky = navbar.offsetTop;
function save1() {
    const dropdowns = document.querySelectorAll('.status-dropdown');
    console.log(dropdowns);

    // Add event listener to each dropdown
    dropdowns.forEach(dropdown => {
        // Retrieve the saved value from localStorage
        const savedValue = localStorage.getItem(dropdown.id);

        // Set the value of the dropdown to the saved value, if available
        if (savedValue) {
            dropdown.value = savedValue;
        }

        dropdown.addEventListener('change', function () {
            const selectedValue = this.value;
            const selectedItem = this.closest('tr').querySelector('td:first-child').textContent;

            // Update the inline styles of options
            this.querySelectorAll('option').forEach(option => {
                option.removeAttribute('selected');
                if (option.value === selectedValue) {
                    option.setAttribute('selected', 'selected');
                }
            });

            // Save the selected value to localStorage
            localStorage.setItem(this.id, selectedValue);

            // You can perform additional actions based on the selected value and item
            console.log(`Selected status for ${selectedItem}: ${selectedValue}`);
        });
    });
}
function myFunction1() {
    // var x = document.getElementById("mySelect").value;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySelect1").value;

    console.log(input);
    filter = input.toUpperCase();
    console.log("FILTER" + filter);
    table = document.getElementById("myTable1");
    tr = table.getElementsByTagName("tr");

    if (filter == "ALL") {
        for (i = 0; i < tr.length; i++) {

            td = tr[i].getElementsByTagName("td")[0];
            console.log("the value of filter" + filter);

            if (td) {


                tr[i].style.display = "";

            }



        }

    }
    else {

        for (i = 0; i < tr.length; i++) {

            td = tr[i].getElementsByTagName("td")[0];
            console.log("the value of filter" + filter);

            // if (td) {

            //   txtValue = td.textContent || td.innerText;
            //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //     tr[i].style.display = "";
            //   } else {
            //     tr[i].style.display = "none";
            //   }
            // }


            if (td) {
                console.log("the value of td.textContent" + td.textContent);
                console.log("the value of td.innerText" + td.innerText);
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

    // window.onscroll = function () { myFunction() };