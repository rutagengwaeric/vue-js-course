<template>
  <dialog class="dialog" open>
     <slot></slot>
  </dialog>
</template>

<style>

.dialog {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog slot {
  color: #721c24;
  font-weight: bold;
  text-align: center;
}
</style>
