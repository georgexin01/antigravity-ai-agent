# F&B App Mastery (Vue 3 Edition)

## Design Patterns extracted from Dachengloklok

- **Stamping System**: Use a `v-for` loop on a `stampArray` in a component to render active/inactive states.
- **Branch Switcher**: Implement as a `BottomSheet.vue` component using CSS transitions or `AnimatePresence` style logic.
- **Cart Context**: use a Vue `reactive` object in a `useCart` composable to manage global state across Menu and Header.

## Component Breakdown

### Header.vue

- Fixed top, `glass-header` class.
- Dynamic branch name display.
- Navigation links to Dashboard and Profile.

### Footer.vue

- Fixed bottom (if navigation) or static bottom.
- Centered brand text and social icons.

### Views

- `Login.vue`: Simple, elegant form with `localStorage` auth trigger.
- `Dashboard.vue`: Hero section + `CheckIn` module + Category filter.
- `Menu.vue`: Vertical or Horizontal scroll categories with product cards.
