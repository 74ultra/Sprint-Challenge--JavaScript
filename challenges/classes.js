// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidFaker {
    constructor(cubeAttrs){
        this.length = cubeAttrs.length;
        this.width = cubeAttrs.width;
        this.height = cubeAttrs.height;
    }

    volume(){
        return this.length * this.width * this.height;
    };

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
}

const cufoid = new CuboidFaker({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeFaker extends CuboidFaker {
    constructor(cubefAttrs){
        super(cubefAttrs)
        this.name = cubefAttrs.name;
        this.favGame = cubefAttrs.favGame;
        this.enemy = cubefAttrs.enemy;
    }

    greet(){
        return `Hello, my name is ${this.name} and my favorite game is ${this.favGame}. I really, really hate ${this.enemy}.`
    }
}

const qBert = new CubeFaker ({
    length: 4,
    width: 4,
    height: 4,
    name: 'Q*bert',
    favGame: 'Q*bert',
    enemy: 'Coily'
})

console.log(qBert.volume()); 
console.log(qBert.surfaceArea());
console.log(qBert.greet());