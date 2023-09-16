import Character from '../interfaces/CharacterInterfaces'

const characters: Character[] = [
    {
        name: "bear",
        favouriteCookie: {
            name: "rumba",
            minCombination: 3,
            pointsForBreak: 100,
            extraPointsPerCookie: 20 
        },
        positions: {
            goodBear : [0, 0, 115, 110],
            sadBear : [135, 0, 115, 110],
            alertBear : [267, 0, 115, 110],
            angryBear : [0, 135, 115, 110],
            normalBear: [135, 135, 115, 110],
            scaryBear : [269, 135, 115, 110],
            veryGoodBear : [0, 267, 127, 110],
            verySadBear : [135, 267, 115, 110],
            coolBear : [267, 267, 115, 110]
      },
    },
    {
        name: "hamster",
        favouriteCookie: {
            name: "pepitos",
            minCombination: 3,
            pointsForBreak: 100,
            extraPointsPerCookie: 20 
        },
        positions: {
            alertHamster :  [275, 0, 120, 110],
            angryHamster :  [115, 0, 150, 110],
            scaryHamster :  [0, 0, 115, 110],
            veryGoodHamster : [ 0, 110, 130, 125],
            normalHamster :  [130, 110, 130, 125],
            verySadHamster :  [270, 110, 115, 125],
            goodHamster :  [270, 238, 115, 125],
            sadHamster : [ 0, 238, 115, 125], 
            coolHamster : [135, 238, 115, 125]
        }
    },
    {
        name: "dog",
        favouriteCookie: {
            name: "pepa",
            minCombination: 3,
            pointsForBreak: 100,
            extraPointsPerCookie: 20 
        },
        positions: {
            alertDog :  [0, 120, 120, 120],
            angryDog :  [120, 250, 150, 126],
            scaryDog :  [137, 0, 120, 110],
            veryGoodDog : [ 0, 250, 130, 125],
            normalDog :  [130, 115, 130, 125],
            verySadDog :  [272, 115, 115, 125],
            goodDog :  [272, 250, 117, 125],
            sadDog : [0, 0, 120, 120], 
            coolDog : [270, 0, 119, 117]
    }
    }
    // ... other characters
  ]

  export default characters