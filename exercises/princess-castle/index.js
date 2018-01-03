class Player {
    constructor(name) {
        // Any data that is static & not a function goes here
        // only include params that you want inputs allowed for
        this.playerName = name;
        this.namePicked = "";
        this.totalCoins = 0;
        this.status = "Small"; // this is a default value; player cannot choose or provide argument to define this, therefore do not include in the parameters
        this.gameActive = true;
    }
    // methods and functions go here
    // do not set = to something
    setName(namePicked) {
        this.namePicked = namePicked;
    }

    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
        }
    }

    gotPowerUp() {
        switch(this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
                this.star = true;
        }
    }

    addCoin() {
        this.totalCoins ++;
        if(this.totalCoins === 50) {
            this.gameActive = false;
        }
    }

    print() {
        for(let key in this) {
            // key is a string in the this object
            console.log(`${key}: ${this[key]}`);
        }
    }
    
}

function rand(){ 
    return Math.floor(Math.random() * 3); // returns # from 1 - 2 [0, 1, 2]
}

let erica = new Player("Erica");
erica.setName("Mario");

while (erica.gameActive) {
    switch(rand()) {
        case 0: 
            erica.gotHit();
            break;
        case 1:
            erica.gotPowerUp();
            break;
        case 2:
            erica.addCoin();
    }
    erica.print();
}

if(erica.status == "Dead") {
    console.log("You are awesome! It's all Colton's fault");
} else {
    console.log("You rock!");
}
