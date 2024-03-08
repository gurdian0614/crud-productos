import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function alerta(mensaje, icono, id = '') {
    onFocus(id);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: mensaje,
        icon: icono
    });
}

function onFocus(id) {
    if (id !== '') {
        document.getElementById(id).focus();
    }    
}