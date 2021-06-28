function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            counter: 0,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        monsterBarHealth() {
            if(this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + "%" };
        },
        playerBarHealth() {
            if(this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + "%" };
        },
        mayUseSpecialAttack() {
            return this.counter < 3;
        },
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <=0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.counter = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.counter++;
            const attachValue = getRandomValue(5, 12);
            this.monsterHealth -= attachValue;
            this.addLogMessage('player','attack',attachValue);
            this.attackPlayer();

        },
        attackPlayer() {
            const attachValue = getRandomValue(8, 15);
            this.playerHealth -= attachValue;
            this.addLogMessage('monster','attack',attachValue);
        },
        specialAttachMonster() {
            this.counter = 0;
            const attachValue = getRandomValue(10, 25);
            this.monsterHealth -= attachValue;
            this.addLogMessage('monster','attack',attachValue);
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
            this.addLogMessage('player','heal',healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who,what,value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
});

app.mount("#game");
