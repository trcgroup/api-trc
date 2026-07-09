---
id: 5_permisos
title: 🔐 Permisos y Validaciones del Módulo Jobs
sidebar_label: Permisos
description: Reglas de acceso, validaciones de campos y lógica de negocio para el módulo Jobs.
sidebar_position: 5
---

# 🔐 Permisos y Validaciones del Módulo Jobs

El módulo **Jobs** incorpora mecanismos de control de acceso y validaciones estrictas para asegurar la integridad de los datos y el correcto flujo de gestión de vacantes dentro del sistema ATS.

---

## 👤 Permisos por rol

El acceso a las acciones del módulo Jobs puede variar según el tipo de usuario o rol asignado en el sistema.

| Rol                  | Ver Jobs | Crear Jobs | Editar Jobs | Eliminar Jobs |
|----------------------|----------|------------|-------------|----------------|
| **Admin**            | ✅       | ✅         | ✅          | ✅             |
| **Recruiter**        | ✅       | ✅         | ✅          | ❌             |
| **Read-Only**        | ✅       | ❌         | ❌          | ❌             |

> 📌 *Nota: Los permisos pueden ser personalizados en función de la configuración específica del sistema de cada empresa.*

---

## ✅ Validaciones en el formulario

Para garantizar la calidad y consistencia de los datos, los formularios de creación y edición de Jobs aplican las siguientes validaciones:

### 🧩 Campos obligatorios

Los siguientes campos deben estar siempre completos para poder guardar un Job:

- `Job Title`
- `Seniority`
- `Job Type`
- `Start Date`
- `Status`

Si alguno de estos campos está vacío o mal completado, el botón `Save` se desactiva automáticamente.

---

### 📏 Límites y restricciones

- **Longitud del título**: se recomienda un límite de 100 caracteres para el campo `Job Title`.
- **Salario mínimo y máximo**: deben ser valores numéricos positivos. Si se ingresan en orden invertido, se mostrará un mensaje de error.
- **Fecha de fin**: no puede ser anterior a la fecha de inicio.
- **Descripción**: aunque no es obligatoria, si se incluye, debe tener mínimo 10 caracteres para evitar textos inválidos.

---

## 🔁 Validaciones de duplicados

- **Título de Job único por cliente**: no se permite crear dos Jobs con el mismo título dentro del mismo cliente. Esta restricción se aplica tanto en la creación como en la edición.

> Ejemplo: Si el Cliente “ACME Inc.” ya tiene un Job llamado “Data Analyst”, no se podrá crear otro Job con el mismo nombre bajo ese cliente.

---

## 📐 Reglas de negocio

- Un Job **solo puede crearse** si el cliente tiene el evento `Client Won` registrado. De lo contrario, la opción de agregar Job estará deshabilitada.
- No se puede asociar un Job a más de un cliente.
- El **estado** del Job determina qué acciones se pueden realizar:
  - `Closed`: no se permiten ediciones.
  - `Open`: se pueden agregar candidatos.
  - `Paused`: se bloquea la asignación de nuevos candidatos, pero se puede reactivar.

---

## 🔒 Comportamientos especiales según permisos

- Si un usuario sin permisos intenta acceder directamente a un Job vía URL, será redirigido a una página de error o sin permisos.
- Las acciones no permitidas (como eliminar para un recruiter) no se muestran en la interfaz, lo que evita errores de interacción.

---

## 🔍 Logs y auditoría

Cada acción realizada sobre un Job (creación, edición, eliminación) queda registrada en el sistema para fines de auditoría y trazabilidad.

---

