﻿window.showToastr = function (type, message)
{
    if (type == "success")
    {
        toastr.success(message);
    }
    if (type == "error")
    {
        toastr.error(message);
    }
}

window.showSwal = function (type, message) {
    if (type == "success") {
        Swal.fire({
            title: "Good",
            text: message,
            icon: "success"
        });
    }
    if (type == "error") {
        Swal.fire({
            title: "Task Failed",
            text: message,
            icon: "error"
        });
    }
}