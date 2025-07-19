---
title: 🧾 Vista Principal
sidebar_position: 5.1
---

# 🧾 Vista Principal de Gestión de Clientes

La vista principal del módulo **Clientes** permite gestionar y visualizar todos los registros de clientes activos en el sistema. Esta vista es el punto de acceso para revisar detalles, editar información o continuar el seguimiento posterior al traspaso desde el módulo CRM.

## Funcionalidades disponibles

###  Búsqueda de clientes
En la parte superior se encuentra un campo de búsqueda que permite filtrar clientes por:
- Nombre de la empresa
- Correo electrónico
- Código de cliente

Esto facilita localizar rápidamente registros específicos dentro de la tabla.

---

###  Tabla de Clientes

La tabla muestra la siguiente información por cada cliente:

| Campo         | Descripción                                                  |
|---------------|--------------------------------------------------------------|
| **Code**      | Código único autogenerado para cada cliente (`CL-XXXXXXXXXX`)|
| **Client Name** | Nombre de la empresa cliente                                |
| **Email**     | Correo electrónico principal del cliente                     |
| **Created**   | Fecha de creación del cliente en el sistema                  |
| **Actions**   | Acciones disponibles para el registro                        |

---

###  Acciones por Cliente

Cada fila cuenta con dos botones de acción en la columna **Actions**:

- ** Ver (View):** Permite acceder al detalle completo del cliente, incluyendo pestañas de `Profile`, `Contacts`, `Events` y `Jobs`.
- ** Editar:** Despliega un formulario modal donde se puede actualizar la información básica del cliente (nombre, correo, sitio web, teléfono, país, área de negocio, comentarios).

---

###  Conteo total

Justo bajo el título "Client Management", se indica el total de clientes registrados. Esto ayuda a tener una visión rápida de la carga actual del sistema.

---

## Observaciones

- El listado incluye todos los clientes que han sido convertidos desde un lead a través del evento **Client Won**.
- Desde esta vista se inicia el acceso a toda la información relacionada con la actividad del cliente, incluyendo postulaciones, contactos y eventos específicos.
