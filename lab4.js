class BiDirectionalPriorityQueue {
  constructor() {
    this.queue = [];
    this.sequence = 0;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}