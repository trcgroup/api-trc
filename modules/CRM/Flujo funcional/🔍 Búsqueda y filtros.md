

# 📂 Filtros y Búsqueda

El módulo **CRM Dashboard** incluye una sección de filtros y búsqueda avanzada para gestionar y localizar leads de forma eficiente.

---

![alt text](<../../../static/img/CRM/Captura filtro.jpeg>)

---
## Búsqueda General

El sistema cuenta con un campo de búsqueda general que permite localizar leads rápidamente.

- **Función:** Permite buscar leads mediante palabras clave.
- **Ubicación:** Barra superior izquierda, dentro del CRM Dashboard.
- **Uso:** Escribe el nombre del lead, el código o correo.
---

![alt text](<../../../static/img/CRM/busqueda lead.png>)

---

##  Filtros Disponibles

Estos filtros permiten refinar la búsqueda de leads según distintos criterios.

### 1. **Lead Type (Tipo de Lead)**
- **Función:** Filtrar los leads según su tipo.
- **Control:** Menú desplegable.
- **Valores disponibles:**
  - All types (Todos los tipos)
  - Holding (Empresa Matriz)
  - Subsidiary (Filial)
  - Single entity (Entidad Única)

---

![alt text](<../../../static/img/CRM/type lead.png>)

---


### 2. **Last Event (Último Evento)**
- **Función:** Filtrar los leads según el evento más reciente que tengan asociado.
- **Control:** Menú desplegable.
- **Valores disponibles:**
  - All events (Todos los eventos)
  - Eventos específicos:
    - **Nurturing:** Seguimiento continuo para mantener la relación con el lead.
    - **AdChase:** Interacciones derivadas de campañas publicitarias pagadas.
    - **NPS:** Evaluaciones de satisfacción mediante Net Promoter Score.
    - **M-Lead:** Lead generado mediante marketing.
    - **T-Lead:** Lead de tipo técnico o especializado.
    - **P-Lead:** Lead potencial, aún en evaluación inicial.
    - **S-Lead:** Lead calificado por el equipo de ventas.
    - **Finder Lead:** Lead encontrado mediante fuentes externas o scrapers.
    - **Commercial Contact:** Contacto comercial establecido directamente.
    - **Meeting:** Reunión formal agendada o realizada con el lead.
    - **Proposal Sent:** Propuesta comercial enviada al lead.
    - **Lost Deal:** Negociación perdida o descartada.
    - **Won Deal:** Negociación cerrada exitosamente.
    - **Proposal Rejected:** Propuesta enviada que fue rechazada por el lead.

---

![alt text](<../../../static/img/CRM/last event.png>)

---

### 3. **Areas (Áreas)**
- **Función:** Filtrar leads por área o industria.
- **Control:** Menú desplegable.
- **Valores disponibles:**
  - All areas (Todas las áreas)
  - Áreas específicas:
    - **Agricultural:** Agricultura tradicional y cultivos.
    - **AgriBusiness:** Negocios agrícolas, comercialización y agroindustria.
    - **Automotive & Machinery:** Industria automotriz y maquinaria pesada.
    - **Energy:** Energía y recursos energéticos.
    - **Farming:** Ganadería y producción agrícola intensiva.
    - **Forestry:** Industria forestal y maderera.
    - **Industrial:** Manufactura y procesos industriales.
    - **Mass Consumption:** Bienes de consumo masivo.
    - **Mining:** Industria minera.
    - **Mining Supplier:** Proveedores y servicios para la minería.
    - **Retail:** Comercio minorista.
    - **Services:** Sector de servicios y consultoría.
    - **Technology:** Tecnología y desarrollo digital.
    - **Telecommunications:** Telecomunicaciones e infraestructura de red.
    - **N/A:** Sin área específica asignada.

---

![alt text](<../../../static/img/CRM/area lead.png>)

---

### 4. **Date Range (Rango de Fechas)**
- **Función:** Permite definir un rango de fechas para filtrar leads según la fecha de creación o de eventos.
- **Control:** Selector de rango de fechas con calendario interactivo.
- **Uso típico:**
  - Seleccionar el rango inicial y final desde un calendario.
  - Filtrar leads que hayan sido creados o hayan tenido eventos dentro de ese rango de fechas.
  - Permite elegir días, semanas o meses completos de forma visual.
- **Ejemplo:** Seleccionar desde el 1 al 31 de julio de 2025 para ver todos los leads correspondientes a ese mes.

---

![alt text](<../../../static/img/CRM/date range lead.png>)

---

## Resultados de Búsqueda

Luego de aplicar los filtros o realizar una búsqueda, la tabla mostrará los resultados con las siguientes columnas:

- **Code:** Código único del lead.
- **Lead:** Nombre del lead.
- **Type:** Tipo de lead.
- **Area:** Área asociada al lead.
- **Current Event:** Evento actual vinculado al lead.
- **Event date:** Fecha del evento más reciente.
- **Created:** Fecha de creación del lead.
- **Actions:** Acciones disponibles sobre el lead (editar, eliminar, etc.).

---

![alt text](<../../../static/img/CRM/Resultado busqueda.png>)

---


### **Create New Lead**
- Permite crear un nuevo lead manualmente mediante un formulario.

### **Import Leads**
- Función para importar leads desde un archivo externo (usualmente un archivo CSV o similar).

---

## ✅ Consideraciones Adicionales

- Todos los filtros se pueden combinar entre sí para realizar búsquedas más precisas.
- Si no se encuentran resultados, el sistema mostrará el mensaje:
  
  ```text
  No companies found
