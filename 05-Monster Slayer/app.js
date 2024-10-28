function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
let countRound;
const app = Vue.createApp({

    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            countRound: 0,
            winner : null,
            logMessages: [] 
        }
    },
    computed: {
        monsterBarStyles() {
            if(this.monsterHealth < 0){
                return { width : '0%' }
            }else{
                return { width: this.monsterHealth + '%' };
            }
          
        },
        playerBarStyles() {
            if(this.playerHealth < 0){
                return { width: '0%' }
            }else{
                return { width: this.playerHealth + '%' };
            }
           
        },
        mayUserSpecialAttack() {
            return this.countRound % 3 !== 0;
        }
    },
    watch : {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                // Draw
                this.winner = 'draw'

            }else if(value <= 0){
                // You lost
                this.winner = 'monster'
            }
        },

        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                // Draw
                this.winner = 'draw'
            }else if(value <= 0){
                // You win
                this.winner = 'player'
            }
        }
    },
    methods: {
        attackMonster() {
            this.countRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        startGame(){
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.winner = null,
            this.countRound = 0,
            this.logMessages = []
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.countRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage('player', 'attack', attackValue);
        },
        healPlayer() {
            this.countRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
                this.addLogMessage('player', 'heal', healValue);
            }
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy : who,
                actionType: what,
                actionValue: value
            }) ;   
         }
    },

});

app.mount('#game')