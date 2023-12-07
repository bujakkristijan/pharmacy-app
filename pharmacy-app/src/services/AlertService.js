import Swal from "sweetalert2";
class AlertService{
    alertSuccess = (message) =>{
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: message,
          showConfirmButton: false,
          timer: 1500
        });
      }
    alertFail = (message) =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
          })
      }
}
export default new AlertService();