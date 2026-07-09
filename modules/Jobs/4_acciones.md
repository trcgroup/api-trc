---
id: 4_acciones
title: 🛠️ Acciones del Módulo Jobs
sidebar_label: Acciones
description: Acciones disponibles en el módulo Jobs: crear, editar, eliminar, y comportamiento de formularios.
sidebar_position: 4
---

# 🛠️ Acciones del Módulo Jobs

El módulo **Jobs** permite gestionar las posiciones laborales disponibles para cada cliente. A continuación se describen en detalle todas las acciones que el usuario puede realizar, sus reglas condicionales y el comportamiento de los distintos formularios.

---

## ✏️ Crear Job

Para crear un nuevo Job, es necesario que el cliente ya tenga el evento `Client Won`. De lo contrario, la pestaña **Jobs** no estará habilitada.

Pasos para crear un Job:

1. Ingresar al perfil del cliente.
2. Ir a la pestaña **Jobs**.
3. Hacer clic en el botón `➕ Add Job`.
4. Completar el formulario de creación.

Campos del formulario:

- Job Title *(obligatorio)*
- Status *(por defecto: Open)*
- Seniority *(obligatorio)*
- Years of Experience
- Job Type *(Full-Time, Part-Time, etc.)*
- Location
- Remote (checkbox)
- Start Date *(obligatorio)*
- End Date
- Salary Range
- Description

📷 *Screenshot: formulario de creación de Job*

Reglas:
- El campo **Job Title** debe ser único por cliente.
- Si no se completa el campo obligatorio, el botón de guardar estará deshabilitado.

---

## 📝 Editar Job

Cada Job puede ser modificado desde el botón `Edit` en la columna de acciones del listado general.

Pasos:

1. Ir al listado de Jobs de un cliente.
2. Hacer clic en el botón `⋯` → `Edit`.
3. Se abrirá el mismo formulario de creación con los campos precargados.

Reglas:
- El título del Job puede modificarse, pero debe seguir siendo único dentro del cliente.
- No se puede editar el cliente asociado al Job.
- Los cambios son aplicados inmediatamente tras hacer clic en `Save`.

📷 *Screenshot: formulario de edición de Job*

---

## 🗑️ Eliminar Job

Desde el listado de Jobs también se puede eliminar una posición:

1. Click en `⋯` → `Delete`.
2. Confirmación mediante modal.
3. El Job se elimina permanentemente.

⚠️ Advertencia: esta acción **no puede deshacerse** y eliminará toda la información relacionada, incluidos los candidatos y eventos.

📷 *Screenshot: opción de eliminación*

---

## 📄 Ver detalle del Job

Al hacer clic sobre el título del Job en el listado, se accede a una vista detallada:

- Información completa del Job.
- Acciones para editar.
- Descarga de documentos asociados.
- Visualización de candidatos vinculados.
- Registro de eventos específicos del proceso de selección.

📷 *Screenshot: vista detallada del Job*

---

## 🎛️ Reglas condicionales y comportamiento dinámico

- Solo es posible **crear un Job** si el cliente tiene el evento `Client Won`.
- El botón `Add Job` aparece únicamente en clientes que cumplan esta condición.
- Si se modifica un Job cerrado (`Closed`), ciertos campos pueden estar bloqueados.
- Los campos varían levemente entre creación y edición para evitar errores.

---

## 🧪 Validaciones internas

- Campos obligatorios: `Job Title`, `Seniority`, `Job Type`, `Start Date`, `Status`.
- Validaciones de formato:
  - Fecha fin no puede ser menor que fecha inicio.
  - Rango salarial numérico.
- Duplicados:
  - No se permiten Jobs con el mismo título dentro de un mismo cliente.

---

## 📌 Notas adicionales

- Todos los Jobs están organizados por cliente.
- Desde la vista del Job se pueden gestionar postulaciones y eventos.
- Los botones de acción se encuentran en la parte derecha del listado general.

---
