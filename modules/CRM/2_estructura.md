---
id: 2_estructura
title: 📐 Estructura del Módulo CRM
sidebar_label: Estructura
description: Descripción detallada de los modelos de datos y sus relaciones en el módulo CRM.
sidebar_position: 1.1
---

# 📐 Estructura del Módulo CRM

El **Módulo CRM** organiza su información en torno a la entidad principal **Lead**, sus subcolecciones internas y las relaciones que mantienen con otros módulos del sistema.

---

## 1. Entidad Principal: **Lead**

| Campo             | Tipo     | Descripción                                                      |
|-------------------|----------|------------------------------------------------------------------|
| **Code**          | String   | Identificador único (`LD-XXXXXXXXXX`).                           |
| **Company Name**  | String   | Nombre de la empresa o lead.                                     |
| **Company Email** | Email    | Correo electrónico principal.                                    |
| **Company Phone** | Teléfono | Número de contacto.                                              |
| **Website**       | URL      | Sitio web oficial.                                               |
| **Address**       | String   | Dirección física.                                                |
| **LinkedIn URL**  | URL      | Perfil de LinkedIn.                                              |
| **Country**       | String   | País de operación.                                               |
| **Company Type**  | Enum     | Holding, PYME, Startup, etc.                                     |
| **Business Area** | String   | Rubro o industria (Technology, Retail, Mining…).                |
| **Status**        | Enum     | `ACTIVE` / `INACTIVE`.                                           |
| **Created**       | Date     | Fecha de creación del registro.                                  |
| **Last Event**    | String   | Tipo de evento más reciente registrado.                          |

:::tip
Campos como **Company Name**, **Company Email** y **Status** son obligatorios y validados en línea.
:::

---

## 2. Subcolecciones Internas

### 📇 Contacts

Listado de personas asociadas al lead:

| Campo           | Descripción                                   | Obligatorio |
|-----------------|-----------------------------------------------|-------------|
| **Name**        | Nombre del contacto.                          | ✅ Sí        |
| **Last Name**   | Apellido del contacto.                        | Opcional    |
| **Email**       | Correo principal.                             | ✅ Sí        |
| **Mobile**      | Número móvil personal.                        | Opcional    |
| **Phone**       | Teléfono fijo.                                | Opcional    |
| **Position**    | Cargo o rol dentro de la empresa.             | ✅ Sí        |
| **Function**    | Función específica del contacto.              | Opcional    |
| **LinkedIn URL**| Enlace al perfil de LinkedIn.                 | Opcional    |
| **Notes**       | Comentarios o notas internas.                 | Opcional    |

### 📅 Events

Histórico de interacciones y actividades:

| Campo         | Descripción                                         | Obligatorio |
|---------------|-----------------------------------------------------|-------------|
| **Event**     | Tipo de evento (Meeting, Proposal Sent, Won Deal…). | ✅ Sí        |
| **Contact**   | Contacto responsable de la actividad.               | ✅ Sí        |
| **Description** | Detalles adicionales o contexto.                  | Opcional    |
| **Documents** | Archivos adjuntos (minutas, propuestas…).           | Opcional    |
| **Created**   | Fecha y hora de registro del evento.                | ✅ Sí        |

:::note
El evento **Won Deal** dispara automáticamente la creación de un **Cliente** en el módulo **Clients**.
:::

---

## 3. Relaciones y Diagrama

```text
                ┌──────────┐
                │  Lead    │
                └──────────┘
                     │
    ┌────────────────┼────────────────┐
    │                │                │
┌──────┐         ┌──────┐         ┌──────┐
│Contacts│       │Events │       │Clients│
└──────┘         └──────┘         └──────┘
