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
enqueue(value, priority) {
  if (
    priority === undefined ||
    priority === null ||
    Number.isNaN(priority)
  ) {
    throw new Error("Priority must be valid");
  }

  this.queue.push({
    value,
    priority,
    id: this.sequence++
  });
}
isHigherPriority(current, selected) {
  return (
    current.priority > selected.priority ||
    (
      current.priority === selected.priority &&
      current.id < selected.id
    )
  );
}

isLowerPriority(current, selected) {
  return (
    current.priority < selected.priority ||
    (
      current.priority === selected.priority &&
      current.id < selected.id
    )
  );
}