export default function validateCreateUser(values){
    let errors = {}
    if (!values.nickName) {
        errors.nickName = "El nombre de usuario es obligatorio";
    }
    if (!values.name) {
        errors.name = "El nombre es obligatorio";
    }
    if (!values.email) {
        errors.email = "El email es obigatorio"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email no válido"
    }
    if (!values.password) {
        errors.password = "El password es obligatorio";
    }
    return errors;
}