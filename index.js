class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length
    this.items.sort((a, b) => a - b);
    return this.items;

  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else { return this.items[pos] }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0]
    }

  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      )

    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      )/this.length

    }
  }
}

module.exports = SortedList;
