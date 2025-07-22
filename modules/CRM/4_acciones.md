---
id: 4_acciones
title: ⚙️ Acciones en CRM
sidebar_label: Acciones
description: Detalle exhaustivo de todas las operaciones de usuario y comportamientos de formularios en el módulo CRM.
sidebar_position: 1.3
---

# ⚙️ Acciones Disponibles en el Módulo CRM

Este apartado recopila **todas** las acciones que un usuario puede realizar en el módulo CRM: **Leads**, **Contacts**, **Events** y **Filtros**. Cada acción incluye su ubicación, comportamiento de formularios, validaciones y reglas condicionales.

---

## 1. Acciones sobre **Leads**

### ➕ Crear Lead  
- **Ubicación:** Botón **Create New Lead** (esquina superior derecha).  
- **Formulario:**  
  - **Obligatorios:**  
    - Company Name  
    - Company Email  
    - Company Type  
    - Business Area  
  - **Opcionales:**  
    - Phone  
    - Website  
    - Address  
    - LinkedIn URL  
    - Comments  
  - **Validaciones en línea:**  
    - Formato de correo válido (`user@dominio.com`).  
    - No duplicar **Company Email**.  
- **Al guardar:**  
  - Nuevo Lead aparece en la tabla con estado `NEW`.  
  - Se registra un evento interno **Lead Created**.  
- :::tip  
  Puedes cancelar con **Cancel** en cualquier momento; no se guardarán los cambios.  
  :::

### ✏️ Editar Lead  
- **Ubicación:** Ícono ✏️ en la columna **Actions** de cada fila.  
- **Formulario:** Igual al de creación, precargado con valores actuales.  
- **Validaciones:** Mismas reglas que al crear.  
- **Al guardar:** Actualiza los datos en la tabla y deja un log de edición con usuario y fecha.

### 🗑️ Eliminar Lead  
- **Ubicación:** Ícono 🗑️ en la columna **Actions**, solo si **no** existen eventos asociados.  
- **Confirmación:** Modal con mensaje de advertencia.  
- **Irreversibilidad:** La eliminación es permanente y borra todos los datos maestros del lead.

### 📥 Importar Leads  
- **Ubicación:** Botón **Import Leads** junto a **Create New Lead**.  
- **Proceso:**  
  1. Selecciona archivo CSV.  
  2. Mapea columnas a campos del formulario.  
  3. Ejecuta validaciones: columnas obligatorias, formato de email/fecha.  
  4. Importa registros válidos; genera log descargable de errores.  
- :::info  
  Solo roles **Admin** y **Manager** pueden importar.  
  :::

---

## 2. Acciones sobre **Contacts**

### ➕ Crear Contacto  
- **Ubicación:** Botón **+ New Contact** en la pestaña **Contacts** del detalle de Lead.  
- **Formulario de Contacto:**  
  | Campo            | Obligatorio | Descripción                         |
  |------------------|:-----------:|-------------------------------------|
  | Name             | ✅ Sí        | Nombre del contacto.                |
  | Last Name        | ❌ No        | Apellido del contacto.              |
  | Email            | ✅ Sí        | Correo principal.                   |
  | Position/Title   | ✅ Sí        | Cargo o puesto (p.ej. Manager).     |
  | Department       | ❌ No        | Área o departamento.                |
  | Phone Number     | ❌ No        | Teléfono fijo.                      |
  | Mobile           | ❌ No        | Móvil personal.                     |
  | LinkedIn URL     | ❌ No        | Perfil de LinkedIn.                 |
  | Comments/Notes   | ❌ No        | Notas adicionales.                  |
- **Automatismo:** Al guardar, crea un evento **Commercial Contact** en **Events**.  
- :::tip  
  El modal valida **Email** y **Position** antes de habilitar **Create**.  
  :::

### ✏️ Editar Contacto  
- **Ubicación:** Menú de tres puntos (`…`) en cada fila de contacto.  
- **Formulario:** Igual al de creación, precargado.  
- **Al guardar:** Actualiza la información y registra un log de edición.

### 🗑️ Eliminar Contacto  
- **Ubicación:** Misma del editar, opción **Delete**.  
- **Confirmación:** Modal de advertencia.  
- **Efecto:** El contacto desaparece de la lista, pero sus eventos previos permanecen.

---

## 3. Acciones sobre **Events**

### ➕ Crear Evento  
- **Ubicación:** Botón **+ New Event** en la pestaña **Events**.  
- **Formulario de Evento:**  
  | Campo        | Obligatorio | Descripción                                 |
  |--------------|:-----------:|---------------------------------------------|
  | Event        | ✅ Sí        | Tipo de evento a registrar (ver lista).     |
  | Contact      | ✅ Sí        | Contacto asociado al evento.                |
  | Description  | ❌ No        | Detalles adicionales o notas.               |
  | Documents    | ❌ No        | Archivos adjuntos (PDF, DOCX, imágenes…).   |
- **Tipos de Evento:**  
  - **Meeting:** Reuniones presenciales/virtuales.  
  - **Proposal Sent:** Propuestas comerciales enviadas.  
  - **Nurturing:** Seguimiento de maduración de lead.  
  - **AdChase:** Interacciones por campañas pagadas.  
  - **NPS:** Encuestas de satisfacción.  
  - **M-Lead** / **T-Lead** / **P-Lead** / **S-Lead:** Clasificaciones del lead.  
  - **Finder Lead:** Leads externos o referidos.  
  - **Commercial Contact:** Creado al guardar un contacto.  
  - **Proposal Rejected:** Propuesta rechazada.  
  - **Lost Deal:** Oportunidad perdida.  
  - **Won Deal:** Oportunidad ganada → **transfiere a Cliente**.  
- :::info  
  Al seleccionar **Won Deal**, tras **Create** se genera un **Cliente** en el módulo Clients.  
  :::

### ✏️ Editar Evento  
- **Ubicación:** Menú `…` junto a cada evento.  
- **Formulario:** Precargado con datos actuales.  
- **Al guardar:** Actualiza el historial y registra log de edición.

### 🗑️ Eliminar Evento  
- **Ubicación:** Misma del editar, opción **Delete**.  
- **Confirmación:** Modal de advertencia.  
- **Irreversibilidad:** Borra permanentemente el evento y sus adjuntos.

---

## 4. Tipos de **Position / Title**

En el campo **Position/Title** de Contacts, puedes seleccionar o personalizar:

| Título      | Descripción                            |
|-------------|----------------------------------------|
| Manager     | Responsable de equipo o proyecto.      |
| Director    | Nivel ejecutivo o de área.             |
| Analyst     | Analista de datos o negocio.           |
| Consultant  | Asesor externo o interno.              |
| Engineer    | Rol técnico especializado.             |
| Coordinator | Coordinación de actividades.           |
| Specialist  | Experto en una función específica.     |

> Puedes añadir nuevos títulos según la estructura de tu organización.

---

## 5. Filtros y Búsqueda

### 🔍 Búsqueda Global  
- **Campo Free-text** sobre todos los campos del Lead (Name, Email, Code).

### 🎛️ Filtros Disponibles  
- **Type:** Selector de tipo de lead (p.ej., M-Lead, S-Lead).  
- **Area:** Selector de área de negocio (Technology, Retail…).  
- **Last Event:** Selector de eventos recientes (Meeting, Won Deal…).  
- **Date Range:** Selector de rango para fechas de creación o de evento.

### 💡 Combinación de Filtros  
- Los filtros pueden combinarse para segmentar con precisión.  
- Al aplicar, la tabla se actualiza en tiempo real y muestra un mensaje si no hay resultados:  
  > _No companies found_

---

## 6. Comportamientos Comunes de Formularios

- **Validación en tiempo real**: errores al perder foco.  
- **Botones Create/Update**: solo habilitados cuando los campos obligatorios son válidos.  
- **Cancel**: descarta cambios y cierra modal.  
- **Subida de archivos**: progreso y previsualización de adjuntos antes de guardar.

