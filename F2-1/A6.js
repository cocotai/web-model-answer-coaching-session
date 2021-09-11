'use strict'

// ======第一階段 開始======
function createPlayer (name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,
    cure: function (hp) {
      if (this.hp > 0) {
        const mpCost = hp * 2
        // 1. 為了加強與第二階段「優先判斷例外狀況」的對比，這裡也建議寫成「if(符合條件) { 符合時要做的事 } else { 不符合時要做的事 }」的流程
        if (this.mp < mpCost) {
          return 'Low on mp.'
        } else {
          this.hp += hp
          this.mp -= mpCost
          return `${this.name} HP recovered! (HP=${this.hp}, MP=${this.mp})`
        }
      } else {
        // 2. 由於題目沒有這樣的敘述要求，但為了程式合理性，可以討論是否需要新增題目說明。句子內容則建議比照其他句子完整描述，例如「Magician cannot use cure after death.」
        return 'Cannot use skills in death.'
      }
    },
    attack: function (enemy) {
      if (this.hp > 0) {
        const hitPoint = Math.floor(Math.random() * 100) + 1
        enemy.hp -= hitPoint
        // 3. 這是個好習慣，如果有需要顯示當下 HP 的話，用 0 取代負值可以避免顯示上出現問題，但由於題目並沒有要求，因此對現階段的學生來說會考慮得有點遠，可以保留但建議加一點理由描述。另外也建議結合上一行，先確認 hitPoint 不會超出範圍再減，否則直接設為 0 ，這樣對正在跟 if else 奮戰的學生而言會更直觀。
        if (enemy.hp < 0) { enemy.hp = 0 }

        let result = `${this.name} hit ${enemy.name}. ${enemy.name} lose ${hitPoint} HP. \n`
        // \n 可以換行

        if (enemy.hp > 0) {
          result += `${enemy.name} is still alive. (HP=${enemy.hp})`
        } else {
          result += `${enemy.name} is dead.`
        }
        return result
      } else {
        // 4. 同第 2. 點
        return 'Cannot use skills in death.'
      }
    }
  }
}

// 5. 由於題目規格明訂「只能更動 attack & cure 兩個函式內容，其他需要符合起手式原始程式碼」，但我也同意這類資訊獨立出來比較符合邏輯，可能需要討論是否需要改起手程式碼。
// 考量：「遊戲結束」和「換邊攻擊」這類資訊，和 cure、attack 技能不太相關，所以放在底下的區塊
console.log('====== CREATE PLAYERS ======')
const magician = createPlayer('Magician', 30, 100)
const warrior = createPlayer('Warrior', 100, 30)
console.log(magician) // {name: "Magician", hp: 30, mp: 100}
console.log(warrior) // {name: "Warrior", hp: 100, mp: 30}
console.log('====== START FIGHT ======')
while (warrior.hp > 0 && magician.hp > 0) {
  // 戰士先攻
  console.log(warrior.attack(magician))
  console.log(magician.cure(15)) // 固定補血 15 點
  // 魔法師後攻
  if (magician.hp > 0) {
    console.log('Change sides \n')
    console.log(magician.attack(warrior))
    console.log(warrior.cure(15)) // 固定補血 15 點
  }
  console.log('======')
}
console.log('GAME OVER.')
// ======第一階段 結束======

/*
// 6. 同樣建議以題目規格為準，規格外的優化（像是獨立 message）可以由學生自行發揮，但不由 Model Answer 提供。（雖然以本題的狀況來說，自由發揮只會拿到 Try Harder）
// ======第二階段 開始======
// 考量：將 message 獨立出來，讓技能函數區塊版面乾淨。
const message = {
  // common
  useSkillInDeath: 'Cannot use skills in death.',

  // cure skill
  lowMP: 'Low on mp.',
  // 考量：key 名稱帶有 Template，用來提醒自己需要輸入參數
  cureSuccessTemplate: function (theCured) {
    return `${theCured.name} HP recovered! (HP=${theCured.hp}, MP=${theCured.mp})`
  },

  // attack skill
  attackSuccessTemplate: function (attacker, enemy, hitPoint) {
    return `${attacker.name} hit ${enemy.name}. ${enemy.name} lose ${hitPoint} HP.`
  },

  enemyAliveTemplate: function (enemy) {
    return `${enemy.name} is still alive. (HP=${enemy.hp})`
  },

  enemyDeadTemplate: function (enemy) {
    return `${enemy.name} is dead.`
  },

  // game round
  changeSides: 'Change sides \n',
  gameOver: 'GAME OVER.'
}

function createPlayer (name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,
    cure: function (hp) {
      if (this.hp <= 0) {
        return message.useSkillInDeath
        // 7. 這個考量很好可以保留，以這個邏輯為主寫成階段二
        // 考量：優先判斷例外狀況，然後 return。return 是為了避免繼續執行後面的程式碼。這樣可以避免層層疊疊的 if-else，增加程式碼易讀性
      }

      const mpCost = hp * 2
      if (this.mp < mpCost) {
        return message.lowMP
      }

      this.mp -= mpCost
      this.hp += hp
      return message.cureSuccessTemplate(this)
    },
    attack: function (enemy) {
      if (this.hp <= 0) {
        return message.useSkillInDeath
      }

      const hitPoint = Math.floor(Math.random() * 100) + 1
      let result = message.attackSuccessTemplate(this, enemy, hitPoint) + '\n'

      // 8. 雖然考量很好，但現階段學生尚未學習到 Math.max 的用法，建議移除。
      // 考量：從 0 和 enemy.hp - hitPoint 之間取最大值，一行程式碼就可以達到「enemy.hp 不會是負數」的效果
      enemy.hp = Math.max(0, enemy.hp - hitPoint)
      if (enemy.hp > 0) {
        result += message.enemyAliveTemplate(enemy)
      } else {
        result += message.enemyDeadTemplate(enemy)
      }
      return result
    }
  }
}

console.log('====== CREATE PLAYERS ======')
const magician = createPlayer('Magician', 30, 100)
const warrior = createPlayer('Warrior', 100, 30)
console.log(magician) // {name: "Magician", hp: 30, mp: 100}
console.log(warrior) // {name: "Warrior", hp: 100, mp: 30}
console.log('====== START FIGHT ======')
while (warrior.hp > 0 && magician.hp > 0) {
  // 戰士先攻
  console.log(warrior.attack(magician))
  console.log(magician.cure(15)) // 固定補血 15 點
  // 魔法師後攻
  if (magician.hp > 0) {
    console.log(message.changeSides)
    console.log(magician.attack(warrior))
    console.log(warrior.cure(15)) // 固定補血 15 點
  }
  console.log('======')
}
console.log(message.gameOver)
// ======第二階段 結束======
*/
