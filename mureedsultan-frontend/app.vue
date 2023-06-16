<template>
  <h1>Hellow This is system</h1>
  <p>{{ output }}</p>
</template>

<script setup>
const query = groq`*`;
const { data } = useSanityQuery(query)
let output = data.value
console.log(data)
</script>

<style>

</style>