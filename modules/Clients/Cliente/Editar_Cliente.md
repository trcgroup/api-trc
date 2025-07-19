---
title: 📝 Editar Cliente
sidebar_position: 5.2
---

# 📝 Editar Cliente

La funcionalidad **Editar Cliente** permite modificar la información registrada de un cliente dentro del sistema. Es útil para actualizar datos de contacto, cambiar información de negocio o agregar notas internas.

Esta acción está disponible desde la **Vista Principal del Módulo Cliente**, en la columna **Actions** mediante el ícono ✏️ (lápiz).

> ✅ **Nota:** La edición de clientes es **similar al proceso de edición de leads** en el módulo CRM. Puedes revisar el proceso de edición de Lead en el siguiente enlace:  
> [Ver documentación de edición de Lead](/modules/CRM/Flujo%20funcional/✏%EF%B8%8F%20Edición%20de%20lead)

---

## 🧾 Campos del formulario

Al hacer clic en **Editar**, se despliega un formulario modal con los siguientes campos editables:

| Campo              | Descripción                                          |
|--------------------|------------------------------------------------------|
| **Company Name**   | Nombre de la empresa cliente                         |
| **Company Email**  | Correo electrónico principal                         |
| **Company Phone**  | Teléfono de contacto                                 |
| **Website**        | Sitio web de la empresa                              |
| **LinkedIn URL**   | URL del perfil o página de LinkedIn                  |
| **Address**        | Dirección física del cliente                         |
| **Country**        | País de origen o operación                           |
| **Area**           | Área o rubro de la empresa (ej. Mining, Tech, etc.)  |
| **Comments**       | Campo abierto para agregar observaciones o notas     |

---

## 💾 Guardar cambios

- Botón **Save Changes**: guarda la información modificada y actualiza la vista del cliente.
- Botón **Cancel**: descarta los cambios y cierra el formulario.

---

## 🛡️ Validaciones

- Los campos obligatorios están marcados con asterisco (*), como el nombre y el correo de la empresa.
- El correo debe tener un formato válido para ser aceptado.
- No se permite guardar sin completar los campos mínimos requeridos.

---

## 🔄 Flujo general

1. Desde la vista principal, haz clic en el ícono ✏️ en la fila correspondiente al cliente.
2. Se abrirá un modal con el formulario precargado con los datos actuales.
3. Modifica los campos necesarios.
4. Haz clic en **Save Changes** para confirmar la actualización.
5. El sistema actualizará los datos del cliente y mostrará los nuevos valores en la vista `View`.
