---

title: ⚙️ Acciones del Módulo Clients
sidebar_label: Acciones
description: Descripción detallada de las acciones disponibles en el módulo Clients.
sidebar_position: 5.3
---

# ⚙️ Acciones del Módulo Clients

A continuación, se describen detalladamente las acciones que puede realizar un usuario en el módulo **Clients**, incluyendo las reglas condicionales, botones, formularios y comportamientos específicos dentro del módulo.

---

## 1. 📌 Cliente (Client)

### ➕ Crear Cliente

- **Generación automática desde CRM:**  
  Un cliente no se crea directamente en el módulo **Clients**. La creación ocurre automáticamente cuando en CRM se cierra un Lead con el evento **Won Deal**. En ese momento, todos los datos del Lead se transfieren automáticamente a este módulo.

- **Regla Condicional:**  
  - Solo se genera un cliente cuando ocurre el evento **Won Deal** en CRM.
  - No existe la posibilidad de crear manualmente clientes para evitar duplicidades y mantener coherencia con el proceso comercial.

### ✏️ Editar Cliente

- **Ubicación:**  
  - Botón ✏️ **Edit Client** ubicado en la vista de detalle del cliente (**Client Details → Profile**).

- **Formulario de edición:**  
  Incluye los siguientes campos:
  - `Company Name` (Obligatorio)
  - `Company Email` (Obligatorio, único en sistema)
  - `Company Phone`
  - `Website`
  - `LinkedIn URL`
  - `Address`
  - `Country` (Obligatorio)
  - `Business Area`
  - `Company Type` (Obligatorio)
  - `Status` (Obligatorio: Active, Inactive, Prospect)
  - `Comments`

- **Comportamiento del formulario:**
  - Botón **Save** habilitado solo si campos obligatorios están completos y validados.
  - Validación instantánea del formato del email.
  - Aviso visual si existen errores en los campos.

### 🗑️ Eliminar Cliente

- **Ubicación:**  
  - Esta acción no está disponible directamente en la interfaz para mantener integridad de datos.
  - **Regla Condicional:** Solo administradores con permisos especiales pueden eliminar clientes desde paneles administrativos.
  - Clientes con ofertas de trabajo activas (**Jobs**) no se pueden eliminar para asegurar la integridad y coherencia de datos.

---

## 2. 📇 Contactos (Contacts)

### ➕ Crear Contacto

- **Ubicación:**  
  - Botón ➕ **+ New Contact** dentro de la pestaña **Contacts** en **Client Details**.

- **Formulario de creación:**
  Incluye los siguientes campos:
  - `Name` (Obligatorio)
  - `Last Name`
  - `Email` (Obligatorio y validado)
  - `Second Email`
  - `Mobile`
  - `Phone`
  - `Second Phone`
  - `Second Mobile`
  - `Position` (Obligatorio)
  - `Function`
  - `LinkedIn URL`

- **Comportamiento del formulario:**  
  - Campos obligatorios requeridos para guardar.
  - Email validado automáticamente al perder foco.
  - Botón **Create** habilitado únicamente al validar campos obligatorios.

- **Trigger automático:**  
  - Crear un contacto genera automáticamente un evento tipo **Commercial Contact** en la pestaña **Events**.

### ✏️ Editar Contacto

- **Ubicación:**  
  - Menú desplegable (**...**) ubicado junto al contacto en la pestaña **Contacts → Edit**.

- **Formulario:**  
  - Igual al formulario de creación, con datos precargados.
  - Botón **Edit** se activa únicamente si los campos obligatorios están correctamente llenados.

### 🗑️ Eliminar Contacto

- **Ubicación:**  
  - Menú desplegable (**...**) junto al contacto → **Delete**.

- **Comportamiento:**  
  - Aparece confirmación previa para evitar eliminaciones accidentales.
  - No permite eliminación si el contacto está vinculado a eventos críticos como **Client Won**.

---

## 3. 📅 Eventos (Events)

### ➕ Crear Evento

- **Ubicación:**  
  - Botón ➕ **+ New Event** dentro de la pestaña **Events**.

- **Formulario de creación:**  
  - `Event Type` (Obligatorio: Meeting, Proposal Sent, Client Won, Proposal Rejected)
  - `Contact` (Obligatorio, seleccionado desde lista desplegable de contactos existentes)
  - `Description` (Opcional, campo texto largo)
  - `Documents` (Opcional, adjuntos tipo PDF o imágenes)

- **Reglas Condicionales:**  
  - Al seleccionar **Client Won** y guardar, automáticamente se abre un modal para crear una oferta de trabajo (**Create Job**).

### ✏️ Editar Evento

- **Ubicación:**  
  - Menú desplegable (**...**) junto al evento → **Edit**.

- **Formulario:**  
  - Mismos campos que en creación, con información precargada.
  - Guarda únicamente con campos obligatorios validados.

### 🗑️ Eliminar Evento

- **Ubicación:**  
  - Menú desplegable (**...**) junto al evento → **Delete**.

- **Comportamiento:**  
  - Confirmación previa obligatoria.
  - No permite eliminar eventos críticos (**Client Won**) asociados directamente a la creación de Jobs activos.

---

## 4. 💼 Ofertas de Trabajo (Jobs)

### ➕ Crear Job

- **Ubicación:**
  - Automático después de crear un evento tipo **Client Won**.
  - Opcionalmente desde la pestaña **Jobs → + New Job**.

- **Formulario de creación:**  
  - **Basic Information:** `Job Title`, `Position Type`.
  - **Compensation & Terms:** `Minimum Salary`, `Maximum Salary`, `Fee Percentage`, `Commercial Scheme`, `Guarantee (months)`.
  - **Additional Terms:** Marcar **Has Cancellation** para desplegar `Cancellation Rate`.
  - **Notes:** Campo de texto opcional para aclaraciones adicionales.

- **Comportamiento del formulario:**  
  - Validaciones estrictas para rangos numéricos y porcentajes.
  - Se muestra estimación de ingresos (`Forecast Revenue`) basada en datos ingresados.

### ✏️ Editar Job

- **Ubicación:**  
  - Menú desplegable (**...**) junto al Job → **Edit**.

- **Formulario:**  
  - Igual que creación, con datos prellenados.
  - Solo permite guardar al validar todos los campos.

### 🗑️ Eliminar Job

- **Ubicación:**  
  - Menú desplegable (**...**) junto al Job → **Delete**.

- **Comportamiento:**  
  - Solicita confirmación previa.
  - Posible bloqueo de eliminación si hay procesos activos asociados (candidatos postulados, entrevistas, etc.).

---

## 5. 🔎 Filtros y Búsqueda en Módulo Clients

- **Filtros disponibles:**  
  - **Search:** búsqueda por nombre, email, o código.
  - **Position Type:** tipo de posición en pestaña Jobs.
  - **Salary Range:** permite filtrar Jobs por rango salarial.
  - **Created Date:** filtrar por fecha específica o rango de fechas.

- **Comportamiento de filtros:**  
  - Aplicación instantánea al modificar cualquier criterio.
  - Resultados actualizados en tiempo real.

---

## 📌 Reglas y Consideraciones Generales

- **Regla condicional global:**  
  - Cliente solo puede crearse automáticamente desde el módulo CRM tras ganar un Lead (Won Deal).
- **Validaciones:**  
  - Formatos correctos en campos obligatorios (Email, URL, números).
  - Prevención de eliminación en elementos críticos o asociados con datos activos.

Con estas acciones claramente definidas, garantizamos que el módulo **Clients** sea intuitivo, eficiente y seguro para todos los usuarios involucrados en el proceso.
