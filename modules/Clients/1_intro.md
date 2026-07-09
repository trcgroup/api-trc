---

title: 🧑‍💼 Introducción al Módulo Clients
sidebar_label: Introducción
description: Descripción general, objetivos y acciones clave del módulo Clients en el sistema ATS.
sidebar_position: 5.1
---

# 🧑‍💼 Introducción al Módulo Clients

El **Módulo Clients** es el punto central dentro de nuestro ATS para la gestión y seguimiento de los clientes que han sido **convertidos** desde el embudo de ventas. Aquí confluyen tanto los datos maestros de cada cliente como el histórico de interacciones, eventos y ofertas de trabajo asociadas.

---

## 📋 Objetivo del Módulo

1. **Centralizar la información**  
   Almacenar de forma estructurada todos los **clientes activos** en la plataforma, con sus datos de contacto, detalles de empresa y comunicaciones.

2. **Dar trazabilidad**  
   Mostrar un **historial completo** de eventos (reuniones, propuestas, encuestas de satisfacción, etc.) y de **ofertas de trabajo** (“Jobs”) generadas tras cerrar negocios.

3. **Facilitar la toma de decisiones**  
   Proveer filtros avanzados y métricas resumidas (total de clientes, historial de actividades, estado de ofertas) para que los equipos de Ventas y Customer Success puedan priorizar acciones y mejorar la retención.

---

## 🔗 Relación con Otros Módulos

- **CRM → Clients**  
  Cuando en el **módulo CRM** un **Lead** registra un evento de tipo **“Won Deal”**, se ejecuta automáticamente la creación de un **Cliente** en este módulo.

- **Clients ↔ Jobs**  
  Cada cliente puede tener múltiples **Job Postings** asociadas:  
  - **Crear ofertas** tras cerrar un negocio.  
  - **Filtrar** y **editar** posiciones abiertas.  
  - **Monitorear** términos comerciales, rangos de salario y forecast de ingresos.

- **Clients → Candidates** (próximamente)  
  Plan de integración futura: vincular candidatos aplicantes directamente a la oferta de un cliente.

---

## ✨ Acciones Clave

- **Búsqueda y filtrado**  
  - Buscar por **nombre**, **correo** o **código** de cliente.  
  - Filtrar por rango de creación, estado, área de negocio.

- **Ver detalle de cliente**  
  - Pestañas: **Profile**, **Contacts**, **Events**, **Jobs**.  
  - Acceso rápido a historial de mensajes y actividades.

- **Editar cliente**  
  - Modal con campos obligatorios (Company Name, Email, Area) y opcionales (Teléfono, Website, Comentarios).  
  - Validaciones en tiempo real y prevención de duplicados.

- **Registrar eventos**  
  - Interacciones en pestaña **Events** (reuniones, propuestas, encuestas).  
  - Adjuntar documentos y asignar responsables.

- **Gestionar ofertas de trabajo**  
  - Crear, editar y eliminar **Job Postings** asociadas.  
  - Configurar rangos salariales, términos comerciales y cláusulas de cancelación.

---

> **Nota:**  
> El Módulo Clients es la base para futuras integraciones con facturación, reportes financieros y análisis de productividad de cuentas. Mantener la calidad de los datos aquí repercute directamente en la eficacia de todo el sistema ATS.
