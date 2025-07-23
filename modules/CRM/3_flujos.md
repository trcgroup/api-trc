---
id: 3_flujos
title: 🔄 Flujos del Módulo CRM
sidebar_label: Flujos
description: Descripción detallada de los flujos de uso y triggers automáticos en el módulo CRM.
sidebar_position: 1.2
---

# 🔄 Flujos del Módulo CRM

El **Módulo CRM** está diseñado para seguir al pie de la letra las etapas del embudo de ventas: desde la captación de un lead hasta su conversión en cliente. A continuación se detalla cada flujo principal, subprocesos, triggers automáticos y validaciones asociadas.

---

## 1. Flujo Principal: De Lead a Cliente

1. **Crear Lead**  
   - Usuario hace clic en **Create New Lead** y completa el formulario con datos obligatorios y opcionales.  
   - Al guardar, el sistema registra un evento interno **Lead Created**.

2. **Agregar Contacto**  
   - En la vista de detalle de Lead, pestaña **Contacts**, se pulsa **+ New Contact**.  
   - Formulario de contacto (Name, Email, Position, etc.) y se guarda.  
   - Se genera automáticamente un evento **Commercial Contact** en la pestaña **Events**.

3. **Registrar Eventos Intermedios**  
   - En pestaña **Events**, pulsar **+ New Event** para Meetings, Proposals, NPS, etc.  
   - Relacionar cada evento a un contacto y adjuntar documentos si procede.

4. **Evento “Won Deal”**  
   - Cuando el usuario registra un evento de tipo **Won Deal**, el sistema marca el Lead como convertido.  
   - **Trigger automático:**  
     - Crea un registro de **Cliente** en el módulo **Clients** con toda la información del Lead.  
     - Envía notificación interna al equipo de Customer Success.

:::tip
Puedes ver el detalle de cómo se transfiere un Lead “Won” al módulo Clientes en la sección **Flujo de incorporación de Cliente**.
:::

---

## 2. Flujos Secundarios

### 2.1 Edición y Eliminación

- **Editar Lead**  
  - Ícono ✏️ en tabla o en detalle.  
  - Modal con datos precargados y validaciones en tiempo real.

- **Eliminar Lead**  
  - Ícono 🗑️ en tabla; solo si no existen eventos asociados.  
  - Modal de confirmación para evitar borrados accidentales.

### 2.2 Importación Masiva

- **Importar Leads**  
  - Botón **Import Leads**: carga CSV, valida columnas y formatos.  
  - Reporte de errores para filas inválidas.

---

## 3. Triggers y Automatizaciones

| Trigger                | Descripción                                                                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **Lead Created**       | Evento interno al guardar un nuevo Lead.                                                                                                        |
| **Commercial Contact** | Automático al crear un Contact.                                                                                                                 |
| **Client Won**         | Al registrar evento “Won Deal”, transfiere Lead a Cliente y genera registro en **Clients**.                                                     |
| **Recordatorio**       | Opcional: notificación tras X días sin actividad en un Lead (configurable por equipo).                                                          |

:::info
Los triggers automáticos aseguran que ningún paso del embudo se quede incompleto y reducen la carga manual de tareas repetitivas.
:::

---

## 4. Validaciones y Restricciones

- **Campos obligatorios**  
  - Lead: Company Name, Company Email, Company Type, Business Area.  
  - Contact: Name, Email, Position.  
  - Event: Event Type, Contact.

- **Unicidad de Email**  
  - No se permiten duplicados en Leads ni en Contacts.

- **Eliminación condicionada**  
  - Un Lead con eventos no puede eliminarse hasta que todos sus eventos sean borrados o migrados.

- **Formatos de datos**  
  - Email con sintaxis válida.  
  - Rango de fechas coherente (Created ≤ Today).

---

## 5. Diagrama de Flujo

```mermaid
flowchart TD
  A[Create Lead] --> B[Add Contact]
  B --> C[New Event]
  C -->|Won Deal| D[Transfer to Clients]
  C -->|Other Events| E[Stay in CRM]
  D --> F[Clients Module]
