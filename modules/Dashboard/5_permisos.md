---
id: dashboard_permisos
title: 🔐 Validaciones y Consideraciones (Dashboard)
sidebar_label: Permisos
description: Reglas, límites y consideraciones para mantener métricas consistentes en el Dashboard.
sidebar_position: 6.5
---

# 🔐 Validaciones y Consideraciones (Dashboard)

El Dashboard depende de la **calidad** de los datos en **Leads**, **Clients**, **Contacts** y **Events**. Estas son las reglas recomendadas:

---

## ✅ Fuentes y consistencia

- **Eventos normalizados:** `COMMERCIAL CONTACT`, `MEETING`, `PROPOSALS` (Proposal Sent/Created), `LEAD WON`, `LOST DEAL`.  
- **Tipos de empresa válidos:** `Subsidiary`, `Holding`, `Single Entity`.  
- **Fechas confiables:** todos los registros deben tener `createdAt` válido (timezone consistente).

---

## ⚖️ Reglas de negocio aplicadas

1. **Precedencia de fase** (anti‑doble conteo): por cada Lead/Client en el rango, solo se suma su **fase más avanzada**.  
2. **Rango de fechas**: todas las métricas y el gráfico se calculan **exclusivamente** con datos dentro del intervalo seleccionado.  
3. **Meetings/Proposals**: se cuentan por **evento**; no requieren precedencia, salvo cuando participan del conteo de **funnel**.

---

## 🚫 Límites y restricciones

- **Eventos fuera de catálogo** no se consideran en las tarjetas de funnel.  
- **Company Type vacío** excluye al Client del reparto `Subsidiary/Holding/Single Entity`.  
- **Datos faltantes** (sin `createdAt`) quedan fuera de cálculo para evitar sesgos.

---

## 🧪 Recomendaciones de QA

- Probar con rangos **cortos** (días puntuales) y **largos** (mes) para validar agregaciones.  
- Crear casos de prueba donde un Lead pase por varias fases en el mismo rango y confirmar que **solo** se cuenta la **fase final**.  
- Validar que el **Sales Report** refleja los mismos números del Dashboard para el mismo rango.

> Con estas reglas, el Dashboard entrega métricas confiables y comparables entre periodos.
