# Sovereign Industrial UX Patterns

This document defines the high-level UX and interaction patterns unique to the **Sovereign Web Framework (SWF)** as used in the quizLaa project.

## 📐 Pattern: The Top-Down Relationship Tray
This pattern provides an "unobtrusive reveal" of relational data without navigating away from the core list.

### 1. Interaction Model
- **Trigger A (General)**: Clicking the `lucide:layers` header icon (Layericon). Opens the tray with **Tabs** for all available relationships (e.g., Reviews, Leads).
- **Trigger B (Specific)**: Clicking a blue count link in a record (e.g., "5 Reviews"). Opens the tray in **Full-Bleed Single Mode** (specifically targeting that relationship).

### 2. Implementation Specs
- **Component**: `RelationshipDrawer.vue` (top-placement).
- **Embedded Tables**: Use the list components (e.g., `ReviewList`) with the `embedded` prop set to `true`. This removes external padding and full-page height controls. [FE:Step 09]
- **Header Aesthetic**: Uses `cinematic-gradient-header` for a premium, darkened visual break.
- **Drawer Placement**: `placement="top"`. Height should be roughly `600px` to `800px` depending on data density.

## 📐 Pattern: Relationship Navigation Hierarchy
Standardized mapping for M2M and 1:N navigation.

| Direction | Mechanism | Implementation | Referral |
|---|---|---|---|
| **UP** (to Parent) | **CellFkLink** | Blue clickable text in List columns. | `[FE:Step 09]` |
| **DOWN** (to Child) | **Layericon** | `lucide:layers` action button in List rows. | `[FE:Step 11]` |

## 📐 Pattern: Sovereign Data Specification (Malaysian)
All seed, mock, and test data MUST strictly follow Malaysian regional standards. [FE:Step 02]

- **Companies**: Must end in `Sdn Bhd` or `Bhd`.
- **Phones**: Format `+60 12-345 6789`.
- **Emails**: Use `.com.my` or `.my` domains where applicable.
- **Geography**: Utilize Malaysian cities (Kuala Lumpur, Penang, Johor Bahru).

## 📐 Pattern: The Profile-Only Detail
This pattern allows viewing an entity's core details (Profile) without the noise of its relationship tables, typically used when navigating *from* a relationship page (e.g., from a Lead to the Agent's profile). [FE:Step 09]

### Implementation Specs
- **Prop**: `hideTables: true`.
- **Navigation**: The `DetailDrawer` must check for this prop in `setData` and pass it to the underlying `Detail` component.

---
**Status**: Authoritative | **Last Update**: 2026-04-21 | **Domain**: UX / Interaction Design
