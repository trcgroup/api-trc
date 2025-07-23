---
id: 5_permisos
title: 🔐 Permisos y Validaciones del Módulo Clients
sidebar_label: Permisos
description: Detalle de las validaciones, restricciones y reglas de negocio aplicadas al módulo Clients.
sidebar_position: 5.4
---

# 🔐 Permisos y Validaciones del Módulo Clients

Este documento explica detalladamente todas las validaciones, restricciones y reglas de negocio específicas aplicadas dentro del módulo **Clients**, asegurando así la calidad y coherencia de los datos ingresados.

---

## ✅ Validaciones de Campos Obligatorios

Los formularios del módulo **Clients** tienen campos obligatorios estrictamente definidos para asegurar datos completos y correctos.

### 1. Cliente (Client)

- **Campos obligatorios:**
  - `Company Name`
  - `Company Email` (validación de formato email)
  - `Country`
  - `Company Type`

- **Límites y validaciones:**
  - Email debe tener formato válido (ejemplo: usuario@dominio.com).
  - No se permite guardar formularios sin completar estos campos.
  - Mensajes visuales inmediatos muestran errores o datos faltantes al intentar guardar.

---

### 2. Contacto (Contact)

- **Campos obligatorios:**
  - `Name`
  - `Email` (validación de formato email)
  - `Position`

- **Límites y validaciones:**
  - Validación automática del email en tiempo real (formato correcto).
  - El formulario no permite guardar hasta que todos los campos obligatorios sean completados correctamente.
  - Campos opcionales claramente marcados para evitar confusión.

---

### 3. Evento (Event)

- **Campos obligatorios:**
  - `Event Type` (Meeting, Proposal Sent, Client Won, Proposal Rejected)
  - `Contact` (selección desde listado existente)

- **Límites y validaciones:**
  - No permite seleccionar un evento sin especificar tipo y contacto asociado.
  - Eventos con tipo `Client Won` activan automáticamente la apertura del formulario de creación de Job.

---

### 4. Oferta de Trabajo (Job)

- **Campos obligatorios:**
  - `Job Title`
  - `Position Type`
  - `Minimum Salary`
  - `Maximum Salary`
  - `Fee Percentage`
  - `Commercial Scheme`
  - `Guarantee (months)`

- **Límites y validaciones:**
  - Rango salarial lógico (mínimo ≤ máximo).
  - `Fee Percentage` debe estar entre 0% y 100%, validación automática del rango.
  - Campo `Cancellation Rate` visible y obligatorio únicamente si está marcada la opción `Has Cancellation`.
  - Botón **Save** permanece desactivado hasta cumplir todas las validaciones.

---

## ⚠️ Control y Validación de Duplicados

- **Email único por Cliente**:
  - Cada cliente debe poseer un `Company Email` único.
  - Intentar guardar un cliente con un email existente muestra mensaje de error inmediato indicando duplicidad.

- **Email único por Contacto**:
  - No pueden existir contactos con correos electrónicos duplicados dentro del mismo cliente o entre diferentes clientes.
  - Mensajes claros advierten al usuario al intentar crear o editar un contacto con un correo ya existente en el sistema.

- **Códigos únicos autogenerados**:
  - Los IDs o códigos (Cliente `CL-XXXX`, Job `JO-XXXX`) se generan automáticamente y no pueden ser modificados.
  - Garantiza integridad referencial en la base de datos.

---

## 📌 Reglas de Negocio Fundamentales

Estas reglas aseguran la coherencia del flujo de trabajo y la información en el módulo Clients:

- **Creación automática de clientes**:
  - Solo al cerrar un Lead como "Won Deal" en el módulo CRM se crea un cliente automáticamente en Clients.
  - No está permitido crear manualmente clientes en Clients para evitar registros duplicados o inconsistentes.

- **Restricción en eliminación**:
  - Clientes con ofertas de trabajo activas (**Jobs**) no pueden ser eliminados para mantener integridad de los procesos asociados.
  - Contactos o eventos asociados con flujos críticos (como un evento **Client Won**) tampoco pueden eliminarse.

- **Validación condicional en Jobs**:
  - Campos adicionales en la creación de ofertas (por ejemplo, `Cancellation Rate`) son visibles y requeridos solo cuando la opción específica (`Has Cancellation`) es seleccionada por el usuario.

- **Interacciones automáticas**:
  - La creación de un contacto genera automáticamente un evento tipo `Commercial Contact` en la pestaña Events del cliente correspondiente.
  - El registro del evento `Client Won` dispara automáticamente la apertura del formulario de creación de ofertas de trabajo (`Jobs`).

---

## 📐 Límites y Validaciones adicionales (Destacado)

- **Longitud máxima de campos:**
  - `Company Name`: máximo 150 caracteres.
  - `Email` (Cliente y Contacto): máximo 100 caracteres.
  - `Phone` / `Mobile`: máximo 20 caracteres.
  - `LinkedIn URL` / `Website`: máximo 250 caracteres.
  - `Address`: máximo 200 caracteres.
  - `Comments` / `Notes`: máximo 500 caracteres.

- **Rangos específicos:**
  - `Salary`: valores positivos desde 1 hasta 50,000.
  - `Fee Percentage`: de 0.1% a 100%.
  - `Guarantee (months)`: valores enteros de 1 a 12 meses.
  - `Cancellation Rate`: 0.1% hasta 100%, requerido solo al seleccionar la opción de cancelación.

- **Tipos y tamaños de documentos adjuntos (Events):**
  - Formatos aceptados: PDF, DOCX, JPG, PNG.
  - Tamaño máximo por archivo: 5MB.
  - Máximo 5 archivos adjuntos por evento.

---

⚠️ **Nota Importante:**
> Estas validaciones, reglas y restricciones buscan mantener la calidad y consistencia de la información dentro del módulo **Clients**, permitiendo procesos más seguros, eficientes y confiables para todos los usuarios involucrados.
