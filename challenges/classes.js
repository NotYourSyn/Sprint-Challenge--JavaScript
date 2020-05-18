// 1. Copy and paste your prototype in here and refactor into class syntax.

/*const CuboidMaker = function(length,width,height){
    this.length = length;
    this.width = width;
    this.height = height;
  }*/

  class CuboidMaker {
      constructor(object){
          this.length = object.length;
          this.width = object.width;
          this.height = object.height;
      }
      volume(){
        return this.length*this.width*this.height;
      }
      surfaceArea(){
        return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }

  class CubeMaker extends CuboidMaker {
    constructor(object){
      super(oject);
    }
    cubeSurface(){
      return 6 * (this.length ** this.height);
    }
    cubeVolume(){
      return Math.pow(this.length,3);
    }
  }
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.