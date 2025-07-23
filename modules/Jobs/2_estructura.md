---
id: 2_estructura
title: 🧩 Estructura del Módulo Jobs
sidebar_label: Estructura
description: Detalle de campos principales, relaciones y subcolecciones del módulo Jobs en el sistema ATS.
sidebar_position: 2
---

# 🧩 Estructura del Módulo Jobs

El módulo **Jobs** representa las **ofertas laborales** activas de cada cliente dentro del sistema ATS. Está estrechamente ligado al módulo **Clientes**, ya que solo se habilita tras el evento `Client Won`, lo que permite asociar una o más posiciones a ese cliente.

## 📌 Campos principales del recurso Job

Cada *Job* incluye un conjunto de campos clave que permiten describir, categorizar y gestionar la vacante de forma detallada:

- **Job Title**: Título de la posición o vacante.
- **Status**: Estado actual del job (`Open`, `Closed`, `Paused`, etc.).
- **Created At / Updated At**: Fechas de creación y última modificación.
- **Start Date / End Date**: Fechas de apertura y cierre del proceso.
- **Seniority**: Nivel de experiencia requerido para el cargo.
- **Experience (años)**: Rango o cantidad de años requeridos.
- **Job Type**: Tipo de empleo (`Full-Time`, `Part-Time`, etc.).
- **Salary Range**: Rango salarial estimado.
- **Location**: Ubicación del cargo.
- **Remote**: Indica si es una posición remota (`Sí / No`).
- **Job Description**: Descripción detallada del cargo.

---

## 🧷 Subcolecciones internas

El recurso Job contiene subsecciones internas que permiten asociar información relevante al proceso de contratación:

- **Job Events**: Eventos que ocurren dentro del proceso de selección para esta posición (por ejemplo, entrevistas agendadas, reuniones internas, decisiones finales, etc.).
- **Candidates**: Listado de postulantes asociados a esta vacante, visibles desde el listado general o desde la vista detallada del job.

---

## 🔗 Relaciones con otros modelos

El módulo **Jobs** se relaciona directamente con los siguientes módulos del sistema:

- **Cliente**: Cada Job está vinculado obligatoriamente a un cliente. No puede existir un Job sin una empresa contratante asociada.
- **Eventos (Client)**: El evento `Client Won` actúa como disparador para habilitar la creación de Jobs.
- **Postulantes (Candidates)**: Cada Job puede tener múltiples candidatos vinculados, los cuales atraviesan distintos estados dentro del proceso de selección.
- **Contactos**: Desde el Job se puede acceder al contacto principal del cliente para coordinar o compartir avances.

---

## 🗺️ Esquema visual

```plaintext
Lead --(Lead Won)--> Cliente --(Client Won)--> Job --> [Candidatos]
                                            |
                                            └--> Eventos (Job)
