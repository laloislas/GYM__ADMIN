import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal, { SweetAlertOptions } from "sweetalert2";
@Injectable({
  providedIn: 'root'
})
export class EventService {

  props: any;

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor() { }

  showLoading(): void {
    this._loading.next(true);
  }

  hideLoading(): void {
    this._loading.next(false);
  }

  private swalConfig: SweetAlertOptions = {
    background: 'white',
    confirmButtonColor: '#796df6',
    cancelButtonColor: '#e74c3c',
    allowOutsideClick: false,
    allowEscapeKey: false,
  }

  private swalLoaderConfig: SweetAlertOptions = {
    background: 'white',
    confirmButtonColor: '#796df6',
    cancelButtonColor: '#e74c3c',
    imageUrl: '../../../assets/images/loading.gif',
    imageWidth: 100,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    color: '#475569'
  }



  swalSuccessNotify(props: {
    text: string;
    title: string;
    params?: object;
    swalOpts?: SweetAlertOptions;
    callBack?: () => void
  }) {
    Swal.fire({
      ...this.swalConfig,
      icon: 'success',
      text: props.text,
      title: props.title,
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
      allowEnterKey: false,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        if (props.callBack) {
          props.callBack();
        }
      }
    });
  }

  swalInfoNotify(props: {
    text: string;
    title: string;
    params?: object;
    swalOpts?: SweetAlertOptions;
  }) {
    Swal.fire({
      ...this.swalConfig,
      icon: 'info',
      text: props.text,
      title: props.title || 'Información',
      confirmButtonText: 'Aceptar',
    });
  }

  swalWarnNotify(props: {
    text: string;
    title: string;
    params?: object;
    swalOpts?: SweetAlertOptions;
  }) {
    Swal.fire({
      ...this.swalConfig,
      icon: 'warning',
      text: props.text,
      title: props.title || 'Atención',
      confirmButtonText: 'Confirmar',
    });
  }

  swalErrorNotify(props: {
    text: string;
    title?: string;
    params?: object;
    swalOpts?: SweetAlertOptions;
    callBack?: () => void
  }) {
    Swal.fire({
      ...this.swalConfig,
      icon: 'error',
      text: props.text,
      title: props.title || 'Error',
      confirmButtonText: 'Error',
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        if (props.callBack) {
          props.callBack();
        }
      }
    });
  }

  swalConfirmNotify(props: {
    text: string;
    title: string;
    params?: object;
    swalOpts?: SweetAlertOptions;
    callBackToConfirm?: () => void;
    callBackToCancel?: () => void
  }) {
    Swal.fire({
      ...this.swalConfig,
      icon: 'question',
      text: props.text,
      title: props.title || '¿Desea continuar?',
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        if (props.callBackToConfirm) {
          props.callBackToConfirm();
        }
      }
      else {
        if (props.callBackToCancel) {
          props.callBackToCancel();
        }
      }
    });
  }

  toastWarnNotify(props: {
    text: string;
    title?: string;
    params?: object;
    swalOpts?: SweetAlertOptions;
  }) {
    Swal.fire({
      ...this.swalConfig,
      icon: 'info',
      text: props.text,
      title: props.title || 'Información',
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
      timer: 4000,
      background: 'white',
      iconColor: 'black',
    });
  }

  swalLoaderOpen(props: {
    text: string;
    title?: string;
    swalOpts?: SweetAlertOptions;
    html?: string;
  }) {
    Swal.fire({
      ...this.swalLoaderConfig,
      title: props.title || 'Cargando...',
      text: props.text,
      html: props.html,
    });
  }

  swalLoaderClose() {
    Swal.close();
  }
}
