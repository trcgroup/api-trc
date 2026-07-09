---
title: ⚙️ Acciones en el Dashboard
sidebar_label: Acciones
description: Acciones disponibles para el usuario y comportamiento de UI.
sidebar_position: 6.4
---

# ⚙️ Acciones en el Dashboard

## 1) Cambiar rango de fechas

- **Dónde:** control de fechas en la parte superior del **Monthly Dashboard**.
- **Comportamiento:** actualiza **todos** los contadores y el **gráfico** con el nuevo rango.

## 2) Ver reporte de ventas

- **Acción:** botón **Sales Report**.
- **Resultado:** abre vista/descarga del reporte con el **mismo rango** aplicado.

## 3) Interactuar con la leyenda del gráfico

- **Acción:** activar/desactivar series (p. ej. mostrar solo `LEAD WON`).
- **Resultado:** el gráfico recalcula y re-renderiza sin recargar la página.

## 4) Hover y tooltips

- **Acción:** pasar el cursor sobre una barra/punto.
- **Resultado:** muestra valores exactos y fecha/periodo.

---

## 🧠 Reglas de conteo (resumen operativo)

- **Clients / Leads / Contacts:** se cuentan por **fecha de creación** dentro del rango.  
- **Meetings / Proposals:** cuentan **eventos** del tipo correspondiente en el rango.  
- **Funnel por fase:** **una sola** categoría por Lead/Client (aplica **precedencia**).  
- **Company Type:** se agrupa por `companyType` del Client.

> Si un Lead llegó a **LEAD WON** y luego a **LOST DEAL** en el periodo, **solo** se contará en **LOST DEAL** (fase posterior).