---
id: 1_intro
title: 🚀 Introducción al Módulo CRM
sidebar_label: Introducción
description: Visión general completa del Módulo CRM para gestión de leads, contactos y eventos.
sidebar_position: 1.0
---

# 🚀 Introducción al Módulo CRM

El **Módulo CRM (Customer Relationship Management)** es la pieza central de nuestra plataforma ATS diseñada para optimizar todo el ciclo de vida de los *leads* y facilitar su conversión en clientes. Proporciona un entorno unificado donde los equipos de ventas, marketing y soporte pueden:

- **Registrar** nuevos *leads* desde múltiples orígenes.  
- **Gestionar** la información de contacto y perfil de cada lead.  
- **Rastrear** todas las interacciones (eventos) y mantener un histórico completo.  
- **Automatizar** transiciones y activaciones de procesos (p. ej., generación de cliente o job).  
- **Analizar** métricas clave para mejorar la eficiencia del embudo de ventas.

---

## 🎯 Objetivos del Módulo

1. **Visión 360° del lead**  
   Centralizar en una sola vista todos los datos relevantes: datos maestros, contactos, eventos y estado actual.  
2. **Seguimiento proactivo**  
   Facilitar recordatorios y notificaciones para que ningún lead quede sin atención.  
3. **Colaboración interdisciplinar**  
   Compartir información actualizada entre ventas, marketing y soporte, evitando silos de datos.  
4. **Conversión eficaz**  
   Identificar rápidamente leads maduros y acelerar su paso a **“Won Deal”**, disparando flujos automáticos de creación de clientes.

---

## 🔑 Conceptos Clave

- **Lead**: Oportunidad de negocio preliminar, con datos básicos (nombre, email, teléfono, sitio web, área y tipo).  
- **Contactos**: Personas vinculadas al lead, cada una con su propia información de contacto y rol.  
- **Eventos**: Registros de interacciones (reuniones, propuestas enviadas, encuestas NPS, cierres de trato). Cada evento puede tener documentos adjuntos y está asociado a un contacto específico.  
- **Estado del Lead**: Atributo que indica la etapa actual en el embudo (`NEW`, `IN PROGRESS`, `WON`, `LOST`).  
- **Transición a Cliente**: Cuando un lead recibe el evento **“Won Deal”**, se genera automáticamente un registro en el **Módulo Clientes**.

---

## ⚙️ Funcionalidades Principales

1. **Formulario de Lead**  
   - Campos obligatorios: `Company Name`, `Email`, `Type`, `Area`.  
   - Campos opcionales: `Phone`, `Website`, `Address`, `LinkedIn URL`, `Comments`.  
   - Validaciones en línea (formato de email, duplicados).

2. **Búsqueda y Filtros Avanzados**  
   - Campo de búsqueda global por texto libre.  
   - Filtros por `Type`, `Area`, `Last Event`, rango de fechas de creación o de evento.  
   - Combinación de criterios para segmentación precisa.

3. **Gestión de Contactos**  
   - Añadir múltiples contactos con atributos (nombre, cargo, emails, móviles).  
   - Al guardar un contacto, se crea un evento **“Commercial Contact”** automático.  
   - Editar y eliminar contactos sin perder la trazabilidad de eventos.

4. **Registro de Eventos**  
   - Tipos de evento predefinidos: `Meeting`, `Proposal Sent`, `Nurturing`, `NPS`, `Client Won`, `Lost Deal`, `Proposal Rejected`, entre otros.  
   - Adjuntar documentos (minutas, propuestas, contratos).  
   - Asociar cada evento a un contacto y dejar notas descriptivas.

5. **Automatizaciones y Triggers**  
   - **Won Deal** → crea Cliente en el módulo Clientes.  
   - Recordatorios automáticos de seguimiento (p. ej., si no hay actividad en X días).  
   - Notificaciones internas al equipo comercial.

6. **Historial y Auditoría**  
   - Registro de cada cambio con usuario y timestamp.  
   - Log de creación, edición y eliminación de Leads, Contactos y Eventos.

7. **Reportes y Métricas**  
   - Paneles de conversión por `Type` y `Area`.  
   - Tasa de cierre (`Won Deals` vs. `Lost Deals`).  
   - Tiempo promedio de conversión y de respuesta.

---

## 🔄 Integración con Otros Módulos

- **Módulo Clientes**:  
  Cada vez que un lead recibe el evento **“Won Deal”**, se genera un nuevo cliente con todos sus datos maestros, contactos y un registro inicial de eventos.  
- **Módulo Jobs**:  
  En combinación con el módulo Clientes, los eventos **“Client Won”** disparan automáticamente la creación de **Job Postings** específicos para proyectos o vacantes.  
- **Módulo Analytics**:  
  Consumo de data agregada para generar dashboards de rendimiento comercial y de procesos.

---

## 🌟 Beneficios de Uso

- **Eficiencia Operativa**: Reduce tareas manuales gracias a formularios estandarizados y automatizaciones.  
- **Calidad de Datos**: Validaciones y reglas de negocio integradas aseguran información confiable.  
- **Colaboración**: Un único repositorio de datos accesible según roles y permisos.  
- **Escalabilidad**: Fácil de extender con nuevos tipos de evento, campos personalizados y flujos adicionales.

---

## 📌 Notas Finales

- El acceso y la visibilidad de cada sección dependen del **rol de usuario** (ver sección de Permisos).  
- Esta documentación está alineada con la estructura de carpetas y numeración de **sidebars** en Docusaurus (`1.0` Intro, `1.1` Estructura, etc.).  
- Para más detalles técnicos, consulta los documentos de **Estructura**, **Flujos**, **Acciones** y **Permisos** correspondientes.
