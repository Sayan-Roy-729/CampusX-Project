import sweetAlert from 'sweetalert2';

const alertMessage = (alertType, title, text,showConfirmButton, showCancelButton) => {
    // icons: error, info, question, success, warning
    sweetAlert.fire({
        icon: alertType,
        title,
        text,
        showConfirmButton,
        showCancelButton,
        cancelButtonColor: '#d33',
        cancelButtonText: 'Okay',
    });
};

export default alertMessage;