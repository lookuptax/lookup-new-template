---
title: 'GDPR & Data Protection'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: February 2026

This page provides a structured overview of how Lookuptax approaches compliance with the General Data Protection Regulation (GDPR).

For legally binding commitments and detailed contractual obligations, please refer to our [Data Processing Addendum (DPA)](https://lookuptax.com/dpa).

## Overview

Lookuptax is a purpose built utility API for tax and business identification number validation. The service is intentionally narrow in scope and designed to process minimal data strictly required to return validation results.

Our GDPR approach reflects:

- A processor-only role for customer-submitted validation data
- Limited categories of data processed
- Clear purpose limitation
- Proportionate technical and organisational safeguards

This page summarises our approach. Our DPA defines the contractual obligations that govern processing activities.

## Our Role Under GDPR

Under GDPR:

- **Customers** act as **Data Controllers**, determining why and how personal data is processed.
- **Lookuptax** acts solely as a **Data Processor**, processing personal data only on documented customer instructions and exclusively to provide validation services.

Lookuptax does not determine the purposes of processing customer submitted validation data and does not act as a system of record.

Further details regarding processor obligations are set out in our [DPA](https://lookuptax.com/dpa).

## Categories of Data Processed

Lookuptax processes only the minimum data required to perform validation services, which may include:

- Country ISO code
- Tax Identification Number (TIN) or Business Identification Number
- Validation responses from authoritative sources (e.g., registered business name, address, validation status)

In certain jurisdictions, some identifiers may relate to sole proprietors and may constitute personal data. For this reason, validation data is treated as potentially sensitive.

The detailed description of processing activities is provided in our [DPA](https://lookuptax.com/dpa).

## Purpose of Processing

Customer-submitted validation data is processed exclusively to:

- Perform point-in-time tax or business ID validation
- Support operational reliability (e.g., retries during upstream downtime)
- Provide customer support and troubleshooting

Lookuptax does not use customer-submitted validation data for advertising, profiling or other secondary purposes.

Binding commitments regarding use limitations are defined in our [DPA](https://lookuptax.com/dpa).

## Core GDPR Principles

Lookuptax aligns its practices with key GDPR principles, including:

### Data Minimisation

We collect and process only data strictly required to perform validation services.

### Purpose Limitation

Validation data is used solely to provide the Lookuptax service.

### Storage Limitation

Validation data is retained only for limited operational purposes and deleted upon request, subject to legal requirements.

### Integrity and Confidentiality

We implement appropriate technical and organisational measures to protect data against unauthorised access, disclosure, alteration, or destruction.

Additional legal commitments relating to these principles are set out in our [DPA](https://lookuptax.com/dpa).

## Security Measures

Lookuptax implements safeguards proportionate to the limited scope and sensitivity of the data processed, including:

- Encryption of data at rest (AES-256 via cloud-managed infrastructure)
- Encryption of data in transit (HTTPS with TLS)
- Logical separation between customer accounts
- Restricted access to production systems and logs
- Hosting on secure cloud infrastructure (Amazon Web Services)

A high level overview of our security posture is available on our [Security & Privacy](/privacy) page. Contractual security obligations are defined in our [DPA](https://lookuptax.com/dpa).

## Subprocessors

Lookuptax engages carefully selected third-party service providers to operate and support the platform.

A current list of subprocessors, including their purpose and processing locations, is available at: [lookuptax.com/sub-processors](https://lookuptax.com/sub-processors)

Subprocessor obligations are governed contractually under our [DPA](https://lookuptax.com/dpa).

## International Data Transfers

Lookuptax may process data outside the European Economic Area (EEA). Where required, appropriate safeguards are applied to international transfers, including reliance on the European Commission's Standard Contractual Clauses (SCCs) or equivalent mechanisms.

## Data Subject Rights

As a data processor, Lookuptax supports customers in fulfilling data subject rights under GDPR, including requests for access, correction, restriction, or deletion.

Requests relating to personal data should be directed to the relevant customer (the data controller), who may instruct Lookuptax as necessary.

Our obligations in this regard are set out in our [DPA](https://lookuptax.com/dpa).

## Incident Response & Breach Notification

Lookuptax maintains monitoring and response processes for security incidents. In the event of a confirmed personal data breach affecting customer-submitted validation data, Lookuptax will notify affected customers without undue delay, as defined in our [DPA](https://lookuptax.com/dpa).

## Supporting Documentation

For complete details, please refer to:

- [Terms of Service](https://lookuptax.com/terms)
- [Privacy Policy](https://lookuptax.com/privacy)
- [Data Processing Addendum (DPA)](https://lookuptax.com/dpa)
- [Subprocessors](https://lookuptax.com/sub-processors)

## Contact

For GDPR, privacy, or data protection inquiries, please contact:

📧 **contact@lookuptax.com**

Lookuptax is committed to transparent and proportionate data protection practices aligned with the scope of our services.
