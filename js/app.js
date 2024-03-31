let forms = document.getElementById("formId");
let validation = document.querySelectorAll('.requires-validation');
let cards = document.querySelector(".Cards");
let firstName = document.getElementById("FN");
let lastName = document.getElementById("LN");
let email = document.getElementById("Email");
let mobileNumber = document.getElementById("MobileID");
let date = document.getElementById("DateID");
let address = document.getElementById("MultilineID");

forms.addEventListener("submit", (event) => {
    event.preventDefault(); 

    Array.from(validation).forEach((submit) => {
        if (!submit.checkValidity()) {
            event.stopPropagation();
            submit.classList.add('was-validated');
        } else {
            const firstNameValue = firstName.value;
            const lastNameValue = lastName.value;
            const emailValue = email.value;
            const mobileNumberValue = mobileNumber.value;
            const dateValue = date.value;
            const addressValue = address.value;
            let genderValue = '';
            const checkedGender = document.querySelector('input[name="gender"]:checked');
            if (checkedGender) {
                genderValue = checkedGender.id; }

            const cardHtml = assignData(firstNameValue, lastNameValue, emailValue, mobileNumberValue, dateValue, addressValue, genderValue);

            cards.insertAdjacentHTML('beforeend', cardHtml);

            forms.reset();

            submit.classList.remove('was-validated');
        }
    });
}, false);


const assignData = ($fn, $ln, $email, $mobileNumber, $date, $address, $gender) => {
    return `
    <div class="card mt-3">
        <div class="card-header">
            ${$fn} ${$ln}
        </div>
        <div class="card-body">
            <blockquote class="blockquote ">
                <footer class="blockquote-footer">Email: <cite title="Source Title">${$email}</cite>
                </footer>
            </blockquote>
            <blockquote class="blockquote ">
                <footer class="blockquote-footer">Phone: <cite title="Source Title">${$mobileNumber}</cite></footer>
            </blockquote>
            <blockquote class="blockquote ">
                <footer class="blockquote-footer">Date of Birth: <cite title="Source Title">${$date}</cite>
                </footer>
            </blockquote>
            <blockquote class="blockquote ">
                <footer class="blockquote-footer">Address: <cite title="Source Title">${$address}</cite></footer>
            </blockquote>
            <blockquote class="blockquote ">
                <footer class="blockquote-footer">Gender: <cite title="Source Title">${$gender}</cite></footer>
            </blockquote>
        </div>
        <button class="btn btn-danger delete-btn">Delete</button>
    </div> 
    `;
};
cards.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const card = event.target.closest('.card');
        card.remove();
    }
});

