import * as Yup from 'yup';

const REGEX_UF = /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/

const messageErrors = {
    required: "Campo obrigatório",
    uf: "UF inválida",
    phone: "Número curto"
}

export const getFormCreateClientValidation = () => Yup.object({
    name: Yup.string().required(messageErrors.required),
    address: Yup.string().required(messageErrors.required),
    city: Yup.string().required(messageErrors.required),
    uf: Yup.string().matches(REGEX_UF, messageErrors.uf).required(messageErrors.required),
    phone: Yup.string().matches(/^\d{10}|\d{11}$/, messageErrors.phone).required(messageErrors.required),
})

export const getInitialValuesClientForm = () => ({
    name: "",
    address: "",
    city: "",
    uf: "",
    phone: "",
})