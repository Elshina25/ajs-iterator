export default class Team {
  constructor() {
    this.team = new Set();
  }

  [Symbol.iterator]() {
    const team = Object.entries(this.team);
    let index = 0;
    return {
      next() {
        if (team.length > 5) {
          return {
            value: undefined,
            done: true,
          };
        }
        index += 1;
        return {
          value: team[index],
          done: false,
        };
      },
    };
  }

  add(member) {
    if (this.team.has(member)) {
      throw new Error('Такой персонаж уже есть в команде!');
    }
    return this.team.add(member);
  }

  addAll(...members) {
    members.forEach((member) => this.team.add(member));
    return this.team;
  }
}
