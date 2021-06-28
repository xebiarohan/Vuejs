function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      counter: 0,
    };
  },
  computed: {
    monsterBarHealth() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarHealth() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.counter < 3;
    },
  },
  methods: {
    attackMonster() {
      this.counter++;
      const attachValue = getRandomValue(5, 12);
    
      if (this.monsterHealth - attachValue < 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attachValue;
      }
      this.attackPlayer();
    },
    attackPlayer() {
      const attachValue = getRandomValue(8, 15);
      
      if(this.playerHealth - attachValue < 0) {
        this.playerHealth = 0;
      } else {
        this.playerHealth -= attachValue;
      }
      
    },
    specialAttachMonster() {
      this.counter = 0;
      const attachValue = getRandomValue(10, 25);
      this.monsterHealth -= attachValue;
      this.attackPlayer();
    },
    healValue() {
      this.counter++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
  },
});

app.mount("#game");
