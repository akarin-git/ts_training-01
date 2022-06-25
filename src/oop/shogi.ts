type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメーターの渡された位置と現在の位置を比較するメソッド
  distranceFrom(position: Position, player: Player) {
    // 先手
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)), //段(縦の位置)は正負反転
      }
    }
  }
}

// new Position(1, "2")

// 駒を表すクラス
// class Piece {
//     position: Position

//     constructor(
//         private readonly player: Player,
//         suji: Suji,
//         dan: Dan
//     ) {
//         this.position = new Position(suji, dan)
//     }
// }

// new Piece("first", 1, "1")

abstract class Piece {
  protected position: Position

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  // メソッドの定義
  // 駒の移動用のメソッド
  moveTo(position: Position) {
    this.position = position
  }

  // 移動できるかどうかの判断するメソッド
  abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distranceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [new Osho('first', 5, '1'), new Osho('second', 5, '9')]
  }
}
