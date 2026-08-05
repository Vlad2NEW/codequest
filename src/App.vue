<script setup>
</script>

<template>
  <div>
    <nav>
      <router-link to="'/'">Головна</router-link>

      |

      <router-link to="'/courses'">Курси</router-link>

      |
      
      <router-link to="'/profile'">Профіль</router-link>
    </nav>

    <hr>

    <router-view />
  </div>
</template>
