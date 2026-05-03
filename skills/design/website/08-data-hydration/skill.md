---
name: 08-data-hydration
description: "Data-Driven UI Hydration: Mapping PHP associative arrays to modular UI components. Ensuring the frontend reflects real-time or mocked database content."
step: 8
version: 1.0
---

# 💧 [08] Data Hydration — The Dynamic Link

## 🎯 Objective
To connect the beautiful UI components to real data. This step ensures that every card, detail, and list is populated dynamically from the project's data source (e.g., `card_data.php`).

## 📖 The Protocol
1.  **Data Extraction**:
    - Include the global data file: `include('lib/card_data.php');`.
    - Access the required array (e.g., `global $cars;`).
2.  **Mapping Logic**:
    - Use `foreach` loops to generate repetitive components (Cards, Brand lists).
    - Map array keys to component slots (e.g., `$car['price']` -> `.price-label`).
3.  **Formatting & Logic**:
    - Format numbers as currency (e.g., `number_format($car['price'])`).
    - Add conditional logic for badges (e.g., if `is_verified`, show the badge).
4.  **Fallback States**:
    - Handle "No Data" scenarios with premium empty states or loading skeletons.

## 📦 Code Vault: Dynamic Mapping Snippets

### 🛠️ Looping through the Inventory
```php
<?php 
global $cars; 
foreach ($cars as $id => $car): 
?>
    <div class="col-lg-4 animate-fade-up">
        <article class="premium-card premium-glass">
            <img src="<?= $car['image'] ?>" alt="<?= $car['name'] ?>">
            <div class="p-20">
                <h3><?= $car['name'] ?></h3>
                <p>RM <?= number_format($car['price']) ?></p>
                <a href="/car/<?= $id ?>" class="btn-premium">View</a>
            </div>
        </article>
    </div>
<?php endforeach; ?>
```

## 🛠️ Validation Checklist
- [ ] Is `global $cars;` declared in the template scope?
- [ ] Do all dynamic values have fallbacks (or `?? ''`)?
- [ ] Are numeric values properly formatted for the Malaysian market (RM)?
- [ ] Is the data mapping clean (no mixed logic and HTML)?

---
*Premium Design Node 08 — Data Hydration*
