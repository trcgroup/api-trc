---
id: 5_permisos
title: 🔒 Validaciones y Reglas de Negocio en CRM
sidebar_label: Permisos
description: Validaciones de campos y reglas de negocio específicas del módulo CRM.
sidebar_position: 1.4
---

# 🔒 Validaciones y Reglas de Negocio en el Módulo CRM

Este documento recoge las **validaciones de campos** y las **reglas de negocio** que aseguran la integridad y consistencia de los datos dentro del módulo CRM.

---

## ✅ Validaciones de Campos

1. **Leads**  
   - **Company Name**, **Company Email**, **Company Type**, **Business Area** son **obligatorios**.  
   - `Company Email` debe tener un formato válido (`usuario@dominio.com`).  
   - Al perder foco, se muestran errores en línea si faltan obligatorios o el email no es válido.  

2. **Contacts**  
   - **Name**, **Email** y **Position/Title** son **obligatorios**.  
   - Campos opcionales: Last Name, Phone, Mobile, Department, LinkedIn URL, Comments.  
   - El formulario valida el email y habilita **Create**/**Update** solo cuando los obligatorios son correctos.

3. **Events**  
   - **Event Type** y **Contact** son **obligatorios**.  
   - `Event Type` debe seleccionarse de la lista predefinida.  
   - Adjunto de **Documents** permite múltiples archivos, pero no es obligatorio.  

:::warning
Los botones **Create** y **Update** permanecerán deshabilitados hasta que todos los campos obligatorios sean completados correctamente.
:::

---

## 🔢 Límites y Rango de Valores

- **No aplica** a sockets de salario o porcentaje en CRM; esas validaciones corresponden a módulos posteriores.  
- Fecha de creación de Lead/Event ≤ fecha actual.  

---

## 🚫 Control de Duplicados

- **Email único**:  
  - No se pueden crear dos **Leads** con el mismo `Company Email`.  
  - No se pueden crear dos **Contacts** con el mismo `Email` dentro del mismo Lead.  
- **Code**:  
  - El identificador `LD-XXXXXXXXXX` para Leads se genera automáticamente y es único globalmente.

---

## 📋 Reglas de Negocio

1. **Conversión a Cliente**  
   - Solo un evento de tipo **“Won Deal”** convierte un Lead en cliente (módulo CRM dispara la transición).

2. **Eliminación Condicionada**  
   - Un **Lead** no puede eliminarse si tiene **≥1** eventos asociados.  
   - Un **Contact** no puede eliminarse si al menos un evento lo referencia.

3. **Eventos Automáticos**  
   - Al crear un **Contact**, se registra automáticamente un evento **“Commercial Contact”** en la pestaña **Events**.  

:::tip
Estas reglas garantizan que no se pierda trazabilidad y que el embudo de ventas funcione sin saltos ni inconsistencias.
:::
