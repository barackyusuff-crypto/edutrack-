<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
</script>

<template>
<header>
  <h2>Edu-track</h2>
  <nav>
  <NavBar />

  </nav>
</header>
<main id="main-content">
  <h2>Welcome, <span>BARACK</span></h2><br>
  <h5>Track your Academic progress And Achievement in one place</h5>

  <article class="subject-card">
        <div class="card-header">
            <h3>{{  }}</h3>
            <span class="badge">{{  }}</span>
        </div>
        <div class="card-body">
            <!-- :style binds a JS object to inline css-->>
             <div class="grade-badge" :style="{ }">
                {{ }} % &mdash; {{ }}
             </div>
             <p class="credits">Credits: {{ }}</p>
            </div>
    
        </article>
</main>



<style scoped>

</style>
</template>