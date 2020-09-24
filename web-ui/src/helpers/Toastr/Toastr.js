import toastr from 'toastr';

export default class Toastr {
  static success = (message) => {
    toastr.options = {
      positionClass: 'toast-top-right',
      hideDuration: 300,
      timeOut: 5000,
    };
    toastr.clear();
    toastr.success(message);
  };
}
