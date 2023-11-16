<script setup lang="ts">
onMounted(async () => {
  const JSConfetti = await import("js-confetti").then((r) => r.default);
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
});

useServerSeoMeta({
  title: "Nuxt on Amplify",
});

const img = useImage()
const catURL = img("/base/cat.png", { width: 640 });
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#00DC82" :height="5" />
      <NuxtPage :style="`background-image: url('${catURL}')`" />
    </NuxtLayout>
  </div>
</template>
