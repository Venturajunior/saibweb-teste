import React, { useCallback, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { getInitialValuesClientForm, getFormCreateClientValidation } from '../../schema/form-create-client';
import { useGetClientList } from '../../contexts/ClientContext'
import { getParam } from '../../utils/get-params'
import './styles.css'

export default function ManageClients() {
  const id = getParam("id")
  const isRegistryClient = !id
  const navigate = useNavigate()

  const formMethods = useForm({
    defaultValues: getInitialValuesClientForm(),
    mode: "onChange",
    resolver: yupResolver(getFormCreateClientValidation())
  })

  const { createClient, loading, getClientById, updateClientById } = useGetClientList()

  const { register, formState: { errors }, reset } = formMethods

  const getClient = useCallback(async (id) => {
    const client = await getClientById(id)
    if(!client) return
    formMethods.reset({
      name: client.TECL_NOME,
      phone: client.TECL_TELEFONE,
      address: client.TECL_ENDERECO,
      city: client.TECL_CIDADE,
      uf: client.TECL_UF
    })
  }, [formMethods, getClientById])

  const handleClearForm = () => {
    reset()
  }

  const handleSubmit = (values) => {
    if(!id) {
      createClient({
        TECL_NOME: values.name,
        TECL_ENDERECO: values.address,
        TECL_CIDADE: values.city,
        TECL_UF: values.uf,
        TECL_TELEFONE: values.phone
      }, reset)
      return
    }
    updateClientById({
      TECL_ID: +id,
      TECL_NOME: values.name,
      TECL_ENDERECO: values.address,
      TECL_CIDADE: values.city,
      TECL_UF: values.uf,
      TECL_TELEFONE: values.phone
    }, () => navigate("/"))
    
  }

  const hasErrorOnForm = !!Object.keys(errors).length;
  
  useEffect(() => {
    if(id) {
      getClient(id)
    }
  }, [id, getClient])

  return (
    <div className="client-details-container">
      <Header title={isRegistryClient ? "Novo Registro" : "Editar Registro"}/>
      <form className="client-details-form" onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <div className="client-details-wrapper">
          <div className="client-inputs-wrapper">
            <Input inputProps={register("name")} label='Nome' error={errors.name?.message} />
            <Input inputProps={register("address")} label='Endereço' error={errors.address?.message} />

          </div>

          <div className="client-inputs-wrapper">
            <Input inputProps={register("city")} label='Cidade' error={errors.city?.message} />
            <Input className="client-input-uf" inputProps={register("uf")} label='UF' error={errors.uf?.message} />
            <Input inputProps={register("phone")} label='Telefone' error={errors.phone?.message} />
          </div>
        </div>

        <div className="client-buttons">
          <Button type="submit" disabled={hasErrorOnForm || loading} loading ={loading}>Salvar</Button>
          <Button type="button" onClick={handleClearForm} disabled={loading}>Cancelar</Button>
        </div>
      </form>
    </div>
  )
}