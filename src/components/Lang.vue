<template>
  <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
    {{ $i18n.locale }}</a
  >
  <ul id="dropdown1" class="dropdown-content">
    <li
      v-for="(lang, i) in langs"
      :key="`Lang${i}`"
      :value="lang"
      @click="updateLang(lang)"
    >
      <div class="valign-wrapper">
        <img
          :src="require(`@/images/${lang}.png`)"
          style="width: 24px; height: 24px; margin-right: 10px;  margin-left: 10px"
        />
        <p>{{ lang }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "lang-item",
  data() {
    return { langs: ["fr", "en"] };
  },
  methods: {
    updateLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>