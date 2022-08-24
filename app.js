




const SubscriptionEmailForm = () => document.querySelector("#subscriptionForm");

const validateForm = (submitEvent) => {
    if (!submitEvent.target.checkValidity()) {
        submitEvent.preventDefault();
        submitEvent.stopImmediatePropagation();
        for (item of document.querySelectorAll(".subscriptionForm__errorMessage")) {
            item.classList.remove("subscriptionForm__errorMessage--hide");
            !document.querySelector(".subscriptionForm__inputEmail").value ?
                item.innerHTML = "Oops! Please add your email" :
                item.innerHTML = "Oops! Please check your email";
        };
    }
}

const addSubmitEventListener = (element) => element.addEventListener("submit", validateForm);


addSubmitEventListener(SubscriptionEmailForm());

