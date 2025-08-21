---
title: 🏗️ Estructura de Datos (Dashboard)
description: Campos de entrada y reglas de agregación usadas por el Dashboard.
sidebar_position: 6.2
---

# 🏗️ Estructura de Datos (Dashboard)

El Dashboard **no** persiste datos propios; **agrega** información desde **Leads**, **Clients** y sus **subcolecciones** (Contacts, Events, Jobs). A continuación se describen los **insumos** y la **lógica** de agregación.

---

## 1) Insumos principales

| Recurso | Fuente | Campos relevantes | Notas |
| --- | --- | --- | --- |
| **Lead** | CRM | `id`, `createdAt`, `events[]` | Eventos como *Commercial Contact*, *Meeting*, *Proposal Sent*, *Won*, *Lost*. |
| **Client** | Clients | `id`, `companyType`, `createdAt` | `companyType ∈ {Subsidiary, Holding, Single Entity}`. |
| **Contact** | Clients/Contacts | `id`, `clientId`, `createdAt` | Usado para contador de **Contacts**. |
| **Event** | Clients/Events y CRM/Leads.events | `eventType`, `createdAt`, `leadId`/`clientId` | Usado para segmentaciones por **tipo de evento**. |

---

## 2) Métricas del header

- **Clients**: total de clientes creados en el rango seleccionado.  
- **Leads**: total de leads creados en el rango seleccionado.  
- **Contacts**: total de contactos creados en el rango seleccionado.  
- **Meetings**: total de eventos `MEETING` dentro del rango.  
- **Proposals**: total de eventos de propuesta (p. ej. `PROPOSAL SENT`) dentro del rango.

> El **rango temporal** se define con el selector de fechas del Dashboard. Si no se elige rango, se usan valores **históricos acumulados**.

---

## 3) Reglas de **precedencia de fase** (muy importante)

Para los indicadores por **tipo de evento** del funnel se cuenta **una sola vez** por Lead/Client según su **fase más avanzada** en el rango:

Orden de precedencia (de menor a mayor):
1. `COMMERCIAL CONTACT`
2. `MEETING`
3. `PROPOSALS` *(incluye Proposal Sent/Created)*
4. `LEAD WON`
5. `LOST DEAL`

**Ejemplo:** si un Lead tiene `COMMERCIAL CONTACT` y luego `MEETING` en el mismo periodo, **solo** se contabiliza en **MEETING**.

---

## 4) Segmentación por tipo de empresa

Contadores por **Company Type** de los **Clients** dentro del rango:

- `Subsidiary`
- `Holding`
- `Single Entity`

> La clasificación proviene del campo `companyType` del **Client**.

---

## 5) Gráfico de barras

- **Dataset**: total de **eventos por fase (con precedencia aplicada)** o total por **día/semana/mes** (según configuración).  
- **Periodo**: ajustable desde el **selector de rango** (ver captura).  
- **Interactividad**: hover para valores exactos; leyenda para activar/desactivar series.

