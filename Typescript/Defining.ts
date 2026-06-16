interface User {
  name: string;
  id: number;
}

class userAccount {
  constructor(
    private name: string,
    private id: number,
  ) {}
}

const user = new userAccount("Hayes", 1);
let scores: number[] = [90, 85, 100];

let t = "hello";
                     