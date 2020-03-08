<template>
  <div class="about">
    <kinesis-container>
      <kinesis-element :strength="15" type="depth">
        <h3>Je m'appelle Christophe, j'ai 30 ans, et je suis actuellement développeur web front-end à Alstom, Charleroi</h3>
      </kinesis-element>
      <kinesis-element :strength="12" type="depth">
        <div class="row-1">
          <p>Infographiste de par ma scolarité (et première passion), c'est en Avril 2019 que je me suis lancé dans une formation développeur web à BeCode à Charleroi</p>
          <p>Durant cette formation de 7 mois, j'ai appris plusieurs langages de programmation. Et à mesure de mon apprentissage, je me suis naturellement dirigé vers le Front-End, bien que mon but premier est d'apprendre le plus de langages afin tracer ma voie dans le Web Development. Durant cette période j'ai approfondi mes connaissances avec React, ce qui m'a permis de créer mon portfolio (du moins les 2 premières versions).</p>
        </div>
      </kinesis-element>
      <kinesis-element :strength="9" type="depth">
        <div class="row-2">
          <p>À la suite de cette formation, mais qui s'inscrit également dans son cadre, j'ai eu un stage de 3 mois en entreprise à Alstom (au sein de A6K à Charleroi). Cette formation m'a permis d'en découvrir davantage dans le monde du "web devs", Bootstrap pour le projet sur lequel j'ai participé, mais également VueJS, TailwindCSS, AlpineJS, et pleins de framework. </p>
          <p>Au terme de ce stage, je suis fier de dire que je suis enfin développeur web de métier! Puisque j'ai décroché un contrat au sein d'Alstom-même, et toujours sur le même projet que pendant mon stage. Ceci était ma petite histoire dans ce monde de web devs.</p>
        </div>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<style lang="scss">
  .about {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 1080px;
    margin: auto;
    text-align: justify;
    h3 {
      text-align: center;
      margin-bottom: 20px;
      width: 100%;
      text-align: justify;
    }
    .row-1 {
      display: flex;
      margin-bottom: 20px;
      p {
        &:first-child{
          flex: 1 100%;
          padding-right: 20px;
        }
        &:last-child{
          padding-left: 20px;
        }
      }
    }
    .row-2 {
      display: flex;
      p {
        &:first-child{
          padding-right: 20px;
        }
        &:last-child{
          padding-left: 20px;
        }
      }
    }
  }
</style>
