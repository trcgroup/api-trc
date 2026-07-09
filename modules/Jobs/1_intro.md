---
id: 1_intro
title: 📌 Introducción al Módulo Jobs
sidebar_label: Introducción
description: Breve introducción al módulo Jobs, su propósito dentro del sistema ATS y su relación con otros módulos.
sidebar_position: 1
---

# 📌 Introducción al Módulo Jobs

El módulo **Jobs** forma parte esencial del sistema **ATS (Applicant Tracking System)** y se encarga de gestionar todas las **vacantes laborales activas** asociadas a los distintos clientes registrados en la plataforma.

Su principal función es centralizar, organizar y facilitar el seguimiento de los procesos de contratación, conectando directamente con postulantes, eventos y acciones específicas para cada posición.

---

## 🎯 Objetivo del módulo

El objetivo principal del módulo Jobs es permitir a los usuarios:

- Crear nuevas vacantes laborales asociadas a clientes existentes.
- Gestionar los detalles y estados de cada Job.
- Cargar y visualizar candidatos vinculados a una posición.
- Registrar eventos dentro del flujo de selección.
- Llevar trazabilidad y control sobre el estado del proceso de cada Job.

Este módulo proporciona una vista clara y estructurada de todas las posiciones abiertas, pausadas o cerradas, facilitando el trabajo coordinado entre equipos de reclutamiento y áreas comerciales.

---

## 🔗 Relación con otros módulos

El módulo Jobs **no funciona de forma independiente**. Está directamente conectado con el flujo comercial y operativo del sistema:

- **Leads** → se transforman en Clientes tras el evento `Lead Won`.
- **Clientes** → habilitan el módulo Jobs solo tras registrar el evento `Client Won`.
- **Jobs** → permiten gestionar postulaciones y procesos una vez habilitados.

```plaintext
Lead --(Lead Won)--> Cliente --(Client Won)--> Job --> [Candidatos / Eventos]
