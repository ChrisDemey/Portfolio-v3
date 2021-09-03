<template>
  <div class="grid-cols-4 gap-4 space-y-2 md:space-y-0 md:grid">
    <ul
      v-for="item in paragraphs"
      :key="item.id"
      :class="item.class"
    >
      <li class="px-4 py-2 font-medium text-justify text-black bg-white rounded-lg">
        <span>
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paragraphs: [
        {
          text: 'Je m\'appelle Christophe, j\'ai 30 ans, et je suis actuellement développeur web front-end à Alstom, Charleroi.',
          class: 'text-lg font-bold col-span-4'
        },
        {
          text: 'Infographiste de par ma scolarité (et première passion), c\'est en Avril 2019 que je me suis lancé dans une formation développeur web à BeCode à Charleroi.',
          class: ''
        },
        {
          text: 'Durant cette formation de 7 mois, j\'ai appris plusieurs langages de programmation. Et à mesure de mon apprentissage, je me suis naturellement dirigé vers le Front-End, bien que mon but premier est d\'apprendre le plus de langages afin tracer ma voie dans le Web Development. Durant cette période j\'ai approfondi mes connaissances avec React, ce qui m\'a permis de créer mon portfolio (du moins les 2 premières versions).',
          class: 'col-span-3'
        },
        {
          text: 'À la suite de cette formation, mais qui s\'inscrit également dans son cadre, j\'ai eu un stage de 3 mois en entreprise à Alstom (au sein de A6K à Charleroi). Cette formation m\'a permis d\'en découvrir davantage dans le monde du web devs, Bootstrap pour le projet sur lequel j\'ai participé, mais également VueJS, TailwindCSS, AlpineJS, et pleins de framework.',
          class: 'col-span-3'
        },
        {
          text: 'Au terme de ce stage, je suis fier de dire que je suis enfin développeur web de métier! Puisque j\'ai décroché un contrat au sein d\'Alstom-même, et toujours sur le même projet que pendant mon stage. Ceci était ma petite histoire dans ce monde de web devs.',
          class: ''
        }
      ]
    }
  }
}
</script>
